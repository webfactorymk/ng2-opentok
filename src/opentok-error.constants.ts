// Opentok errors https://tokbox.com/developer/sdks/js/reference/Error.html

let GENERAL_NETWORK_ERROR = "A network error occurred. Please check your internet connection."
let MEDIA_FAILED_ERROR = "Something went wrong with the media. Please refresh!"

let GENERAL_SESSION_CONNECTION_ERROR_MESSAGE = "Something went wrong while connecting to the session. Contact your administrator!"
let GENERAL_SESSION_SUBSCRIBE_ERROR_MESSAGE = "Something went wrong while subscribing to stream. Contact your administrator!"
let GENERAL_SESSION_PUBLISH_ERROR_MESSAGE = "Something went wrong while publishing. Contact your administrator!"
let GENERAL_PUBLISHER_ERROR_MESSAGE = "Something went wrong with the publisher. Contact your administrator!"
let GENERAL_SIGNAL_ERROR_MESSAGE = "Something went wrong. Contact your administrator!"

export const SESSION_CONNECTION_ERROR_MESSAGES = {
    'OT_NOT_CONNECTED': GENERAL_NETWORK_ERROR,
}

export const SESSION_SUBSCRIBE_ERRORS_MESSAGES = {
    'OT_ICE_WORKFLOW_FAILED': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_ABORTED': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_DECODE': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_NETWORK': GENERAL_NETWORK_ERROR,
    'OT_NOT_CONNECTED': GENERAL_NETWORK_ERROR
}

export const SESSION_PUBLISH_ERRORS_MESSAGES = {
    'OT_CHROME_MICROPHONE_ACQUISITION_ERROR': "Can not access michrophone due to browser error. Please refresh the page!",
    'OT_CONSTRAINTS_NOT_SATISFIED': GENERAL_SESSION_PUBLISH_ERROR_MESSAGE,
    'OT_CREATE_PEER_CONNECTION_FAILED': GENERAL_NETWORK_ERROR,
    'OT_HARDWARE_UNAVAILABLE': "The camera or michrophone is used by other application. Please disconnect all other usages!",
    'OT_ICE_WORKFLOW_FAILED': MEDIA_FAILED_ERROR,
    'OT_INVALID_PARAMETER': GENERAL_SESSION_PUBLISH_ERROR_MESSAGE,
    'OT_MEDIA_ERR_ABORTED': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_DECODE': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_NETWORK': GENERAL_NETWORK_ERROR,
    'OT_MEDIA_ERR_SRC_NOT_SUPPORTED': "Video stream is not supported for your playback!",
    'OT_NO_DEVICES_FOUND': "No devices were found to provide the media stream.",
    'OT_NO_VALID_CONSTRAINTS': "The camera or michrophone is disabled. Please enable them!",
    'OT_NOT_CONNECTED': GENERAL_NETWORK_ERROR,
    'OT_NOT_SUPPORTED': "The stream has been detected to be not suitable for playback.",
    'OT_PERMISSION_DENIED': GENERAL_SESSION_PUBLISH_ERROR_MESSAGE,
    'OT_SCREEN_SHARING_NOT_SUPPORTED': 'Screen sharing is not supported in the browser.',
    'OT_SCREEN_SHARING_EXTENSION_NOT_REGISTERED': "Screen-sharing support in this browser requires an extension, but one has not been registered.",
    'OT_SCREEN_SHARING_EXTENSION_NOT_INSTALLED': "Screen-sharing support in this browser requires an extension, but the extension is not installed.",
    'OT_SET_REMOTE_DESCRIPTION_FAILED': MEDIA_FAILED_ERROR,
    'OT_STREAM_CREATE_FAILED': MEDIA_FAILED_ERROR,
    'OT_TIMEOUT': GENERAL_SESSION_PUBLISH_ERROR_MESSAGE,
    'OT_USER_MEDIA_ACCESS_DENIED': "The end-user denied access to screen sharing.",
    'OT_UNEXPECTED_SERVER_RESPONSE': GENERAL_SESSION_PUBLISH_ERROR_MESSAGE
}

export const PUBLISHER_ERRORS_MESSAGES = {
    'OT_HARDWARE_UNAVAILABLE': "The camera or michrophone is used by other application. Please disconnect all other usages!",
    'OT_INVALID_PARAMETER': GENERAL_PUBLISHER_ERROR_MESSAGE,
    'OT_MEDIA_ERR_ABORTED': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_DECODE': MEDIA_FAILED_ERROR,
    'OT_MEDIA_ERR_NETWORK': GENERAL_NETWORK_ERROR,
    'OT_MEDIA_ERR_SRC_NOT_SUPPORTED': "Video stream is not supported for your playback!",
    'OT_NOT_SUPPORTED': GENERAL_PUBLISHER_ERROR_MESSAGE,
    'OT_NO_DEVICES_FOUND': "No devices were found to provide the media stream.",
    'OT_NO_VALID_CONSTRAINTS': "The camera or michrophone is disabled. Please enable them!",
    'OT_SCREEN_SHARING_NOT_SUPPORTED': 'Screen sharing is not supported in the browser.',
    'OT_SCREEN_SHARING_EXTENSION_NOT_REGISTERED': "Screen-sharing support in this browser requires an extension, but one has not been registered.",
    'OT_SCREEN_SHARING_EXTENSION_NOT_INSTALLED': "Screen-sharing support in this browser requires an extension, but the extension is not installed."
}

const SIGNAL_ERRORS_MESSAGES = {
    'OT_INVALID_PARAMETER': GENERAL_SIGNAL_ERROR_MESSAGE,
    'OT_NOT_CONNECTED': GENERAL_NETWORK_ERROR,
    'OT_NOT_FOUND': GENERAL_SIGNAL_ERROR_MESSAGE,
    'OT_RATE_LIMIT_EXCEEDED':MEDIA_FAILED_ERROR
}

