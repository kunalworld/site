# Cloudflare Worker Deployment Instructions

## Overview
This worker handles two endpoints:
1. **POST /api/contact** - Existing contact form email functionality (unchanged)
2. **GET /api/prices** - New endpoint for live market prices

## Deployment Steps

### Option 1: Using Cloudflare Dashboard (Recommended)

1. Log in to your Cloudflare account
2. Go to **Workers & Pages** from the left sidebar
3. Find your existing worker that handles `kunalworld.in`
4. Click **Edit Code**
5. Replace the entire code with the content from `worker.js` in this repository
6. Click **Save and Deploy**

### Option 2: Using Wrangler CLI

If you have wrangler installed:

```bash
wrangler deploy worker.js
```

## Environment Variables

Make sure these environment variables are set in your Cloudflare Worker:

- `RESEND_API_KEY` - Your Resend API key (already configured)
- `CONTACT_EMAIL` - Email address to receive contact form submissions (already configured)

## API Endpoints

### GET /api/prices

Returns live market prices in JSON format:

```json
{
  "gold": 2024.50,
  "silver": 23.45,
  "eurusd": 1.0856
}
```

**Data Sources:**
- Gold & Silver: https://api.metals.live/v1/spot
- EUR/USD: https://open.er-api.com/v6/latest/USD

**CORS:** Enabled for all origins

### POST /api/contact

Existing endpoint - no changes made. Sends contact form emails via Resend.

## Testing

After deployment, test the new endpoint:

```bash
curl https://kunalworld.in/api/prices
```

Expected response:
```json
{
  "gold": 2024.50,
  "silver": 23.45,
  "eurusd": 1.0856
}
```

## Frontend Changes

The website now fetches live prices from `/api/prices` and updates every 10 seconds.

No visual or layout changes were made - only the price values are now dynamic.

## Notes

- The worker includes fallback values in case the external APIs are unavailable
- CORS headers are configured to allow requests from any origin
- The contact form functionality remains unchanged and continues to work as before
