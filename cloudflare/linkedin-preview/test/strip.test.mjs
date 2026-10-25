import assert from "node:assert/strict";
import { test } from "node:test";
import { Miniflare } from "miniflare";

const HOME_HTML = `<!DOCTYPE html>
<html><head>
<title>Kritr | AI that helps people decide</title>
<meta name="description" content="Kritr helps people make clearer decisions with AI, through products, applications, and collaboration.">
<meta property="og:title" content="Kritr | AI that helps people decide">
<meta property="og:description" content="Kritr helps people make clearer decisions with AI, through products, applications, and collaboration.">
<meta property="og:url" content="https://kritr.com/">
<meta property="og:site_name" content="Kritr">
<meta property="og:image" content="https://kritr.com/og-kritr.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Kritr logo">
<meta property="og:video" content="https://kritr.com/og-kritr.mp4">
<meta property="og:video:secure_url" content="https://kritr.com/og-kritr.mp4">
<meta property="og:video:type" content="video/mp4">
<meta property="og:video:width" content="1200">
<meta property="og:video:height" content="630">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://kritr.com/og-kritr.jpg">
</head><body>home</body></html>`;

const MYLAB_HTML = `<!DOCTYPE html>
<html><head>
<title>MyLabStory | Kritr</title>
<meta name="description" content="Your health journey, decoded.">
<meta property="og:title" content="MyLabStory">
<meta property="og:description" content="Your health journey, decoded.">
<meta property="og:url" content="https://kritr.com/mylabstory/">
<meta property="og:site_name" content="MyLabStory">
<meta property="og:image" content="https://kritr.com/og-mylabstory.jpg">
<meta property="og:image:width" content="1536">
<meta property="og:image:height" content="1024">
<meta property="og:image:alt" content="MyLabStory — your health journey, decoded">
<meta property="og:video" content="https://kritr.com/og-mylabstory.mp4">
<meta property="og:video:secure_url" content="https://kritr.com/og-mylabstory.mp4">
<meta property="og:video:type" content="video/mp4">
<meta property="og:video:width" content="1200">
<meta property="og:video:height" content="630">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://kritr.com/og-mylabstory.jpg">
</head><body>mylabstory</body></html>`;

const PRIVACY_HTML = `<!DOCTYPE html><html><head>
<title>Kritr Privacy Policy | Kritr</title>
<meta name="description" content="Read the Kritr Privacy Policy">
<meta property="og:image" content="https://kritr.com/og-kritr.jpg">
<meta property="og:type" content="website">
</head><body>privacy-sentinel</body></html>`;

const LINKEDIN_UA =
  "LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/4.3 +http://www.linkedin.com)";
const FACEBOOK_UA = "facebookexternalhit/1.1";

function originResponse(request) {
  const url = new URL(request.url);
  if (url.pathname.endsWith(".jpg") || url.pathname.endsWith(".mp4")) {
    const video = url.pathname.endsWith(".mp4");
    return new Response(video ? "mp4-bytes" : "jpeg-bytes", {
      headers: {
        "content-type": video ? "video/mp4" : "image/jpeg",
        "cache-control": "max-age=14400",
      },
    });
  }
  let html = HOME_HTML;
  if (url.pathname.startsWith("/mylabstory")) html = MYLAB_HTML;
  else if (url.pathname.startsWith("/privacy")) html = PRIVACY_HTML;
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "max-age=600",
    },
  });
}

async function worker() {
  return new Miniflare({
    modules: true,
    scriptPath: new URL("../src/index.js", import.meta.url).pathname,
    serviceBindings: {
      ORIGIN(request) {
        return originResponse(request);
      },
    },
  });
}

function assertNoVideo(html) {
  assert.equal(html.includes("og:video"), false);
  assert.equal(html.includes(".mp4"), false);
}

function assertLinkedInCache(response) {
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  assert.equal(response.headers.get("cdn-cache-control"), "no-store");
  assert.equal(response.headers.get("vary"), "User-Agent");
}

test("LinkedInBot homepage HTML drops og:video and keeps the poster", async () => {
  const mf = await worker();
  try {
    const response = await mf.dispatchFetch("https://kritr.com/", {
      headers: { "user-agent": LINKEDIN_UA },
    });
    const html = await response.text();
    assert.equal(response.status, 200);
    assertNoVideo(html);
    assert.match(html, /property="og:image" content="https:\/\/kritr.com\/og-kritr.jpg"/);
    assert.match(html, /property="og:image:width" content="1200"/);
    assert.match(html, /property="og:image:height" content="630"/);
    assert.match(html, /property="og:site_name" content="Kritr"/);
    assert.match(html, /property="og:type" content="website"/);
    assert.match(html, /property="og:title" content="Kritr \| AI that helps people decide"/);
    assert.match(html, /name="twitter:image" content="https:\/\/kritr.com\/og-kritr.jpg"/);
    assertLinkedInCache(response);
  } finally {
    await mf.dispose();
  }
});

test("LinkedInBot MyLabStory HTML drops og:video and keeps that page poster", async () => {
  const mf = await worker();
  try {
    const response = await mf.dispatchFetch("https://kritr.com/mylabstory/", {
      headers: { "user-agent": "linkedinbot/1.0" },
    });
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(html, /mylabstory/);
    assertNoVideo(html);
    assert.match(html, /property="og:image" content="https:\/\/kritr.com\/og-mylabstory.jpg"/);
    assert.match(html, /property="og:image:width" content="1536"/);
    assert.match(html, /property="og:description" content="Your health journey, decoded."/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    assert.equal(html.includes("og-kritr.jpg"), false);
    assertLinkedInCache(response);
  } finally {
    await mf.dispose();
  }
});

test("Facebook and browsers still receive og:video on both pages", async () => {
  const mf = await worker();
  try {
    const pages = [
      ["https://kritr.com/", "og-kritr.mp4"],
      ["https://kritr.com/mylabstory/", "og-mylabstory.mp4"],
    ];
    for (const userAgent of [FACEBOOK_UA, "Mozilla/5.0"]) {
      for (const [url, video] of pages) {
        const response = await mf.dispatchFetch(url, {
          headers: { "user-agent": userAgent },
        });
        const html = await response.text();
        assert.match(html, /property="og:video"/);
        assert.match(html, /property="og:video:secure_url"/);
        assert.match(html, /property="og:video:type" content="video\/mp4"/);
        assert.match(html, /property="og:video:width" content="1200"/);
        assert.match(html, /property="og:video:height" content="630"/);
        assert.match(html, new RegExp(video.replace(".", "\\.")));
        assert.match(html, /property="og:image"/);
        assert.equal(response.headers.get("cache-control"), "max-age=600");
        assert.equal(response.headers.get("cdn-cache-control"), null);
      }
    }
  } finally {
    await mf.dispose();
  }
});

test("LinkedInBot asset fetches and pages without video tags pass through", async () => {
  const mf = await worker();
  try {
    const image = await mf.dispatchFetch("https://kritr.com/og-kritr.jpg", {
      headers: { "user-agent": LINKEDIN_UA },
    });
    assert.equal(await image.text(), "jpeg-bytes");
    assert.equal(image.headers.get("content-type"), "image/jpeg");
    assert.equal(image.headers.get("cache-control"), "max-age=14400");

    const video = await mf.dispatchFetch("https://kritr.com/og-mylabstory.mp4", {
      headers: { "user-agent": LINKEDIN_UA },
    });
    assert.equal(await video.text(), "mp4-bytes");
    assert.equal(video.headers.get("content-type"), "video/mp4");
    assert.equal(video.headers.get("cache-control"), "max-age=14400");

    const privacy = await mf.dispatchFetch("https://kritr.com/privacy/", {
      headers: { "user-agent": LINKEDIN_UA },
    });
    const html = await privacy.text();
    assert.match(html, /privacy-sentinel/);
    assertNoVideo(html);
    assert.match(html, /property="og:image" content="https:\/\/kritr.com\/og-kritr.jpg"/);
    assertLinkedInCache(privacy);
  } finally {
    await mf.dispose();
  }
});
