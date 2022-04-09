import DEFAULT_CONFIG from '../config/default_config'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const GaPageView = (url) => {
  window.gtag('config', DEFAULT_CONFIG.gaTrackingId, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const GaEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}