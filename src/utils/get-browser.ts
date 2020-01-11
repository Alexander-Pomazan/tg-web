export const getBrowser = (): string => {
  let browserName = ''

  const { documentMode } = (document as any) // eslint-disable-line

  const isIE = /* @cc_on!@ */ !!documentMode
  const isEdge = !isIE && !!window.styleMedia
  if (navigator.userAgent.includes('Chrome') && !isEdge) {
    browserName = 'Chrome'
  } else if (navigator.userAgent.includes('Safari') && !isEdge) {
    browserName = 'Safari'
  } else if (navigator.userAgent.includes('Firefox')) {
    browserName = 'Firefox'
  } else if (navigator.userAgent.includes('MSIE') || !!documentMode === true) {
    // IF IE > 10
    browserName = 'IE'
  } else if (isEdge) {
    browserName = 'Edge'
  } else {
    browserName = 'Unknown'
  }

  return browserName
}
