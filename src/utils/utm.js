export function buildAffiliateUrl(baseUrl, campaign, content, toolName = '') {
  const params = new URLSearchParams({
    utm_source: 'aitoolvault',
    utm_medium: 'affiliate', 
    utm_campaign: campaign,
    utm_content: content
  });
  
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${params.toString()}`;
}