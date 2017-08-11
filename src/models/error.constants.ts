// Opentok errors https://tokbox.com/developer/sdks/js/reference/Error.html

export const SESSION_CONNECTION_ERRORS = {
    invalidApiKey: 'OT_AUTHENTICATION_ERROR',
    badResponse: 'OT_BADLY_FORMED_RESPONSE',
    connectionFailed: 'OT_CONNECT_FAILED',
    unexpectedEmptyResponse: 'OT_EMPTY_RESPONSE_BODY',
    invalidSessionId: 'OT_INVALID_SESSION_ID',
    invalidParameter: 'OT_INVALID_PARAMETER',
    networkNotConnected: 'OT_NOT_CONNECTED',
    termsOfServiceViolated: 'OT_TERMS_OF_SERVICE_FAILURE',
    unexpectedHTTPStatus: 'OT_INVALID_HTTP_STATUS',
    crossDomainOrParsingError: 'OT_XDOMAIN_OR_PARSING_ERROR',
}

export const SESSION_FORCE_DISCONNECT_ERRORS = {
    invalidParameter: 'OT_INVALID_PARAMETER',
    netowrkNotConnected: 'OT_NOT_CONNECTED',
    permissionDenied: 'OT_PERMISSION_DENIED'
}

export const SESSION_SUBSCRIBE_ERRORS = {
    createPeerConnectionFailed: 'OT_CREATE_PEER_CONNECTION_FAILED',
    clientDisconnectedFromSession: 'OT_DISCONNECTED',
    invalidParameter: 'OT_INVALID_PARAMETER',
    webRTCConnectionFailed: 'OT_ICE_WORKFLOW_FAILED',
    videoStreamFetchFailed: 'OT_MEDIA_ERR_ABORTED',
    videoStreamDecodeFailed: 'OT_MEDIA_ERR_DECODE',
    streamFailedFromNetworkError: 'OT_MEDIA_ERR_NETWORK',
    mediaSourceNotSupported: 'OT_MEDIA_ERR_SRC_NOT_SUPPORTED',
    networkNotConnected: 'OT_NOT_CONNECTED',
    setRemoteDescriptionFailed: 'OT_SET_REMOTE_DESCRIPTION_FAILED',
    streamDestroyed: 'OT_STREAM_DESTROYED',
    streamNotFound: 'OT_STREAM_NOT_FOUND'
}

export const SESSION_FORCE_UNPUBLISH_ERRORS = {
    invalidParameter: 'OT_INVALID_PARAMETER',
    networkNotConnected: 'OT_NOT_CONNECTED',
    permissionDenied: 'OT_PERMISSION_DENIED'
}

export const SESSION_PUBLISH_ERRORS = {
    microphoneAccessFromChromeFailed: 'OT_CHROME_MICROPHONE_ACQUISITION_ERROR',
    constraintsNotSatisfied: 'OT_CONSTRAINTS_NOT_SATISFIED',
    createPeerConnectionFailed: 'OT_CREATE_PEER_CONNECTION_FAILED',
    unavailableHardware: 'OT_HARDWARE_UNAVAILABLE',
    webRTCConnectionFailed: 'OT_ICE_WORKFLOW_FAILED',
    invalidParameter: 'OT_INVALID_PARAMETER',
    videoStreamFetchFailed: 'OT_MEDIA_ERR_ABORTED',
    videoStreamDecodeFailed: 'OT_MEDIA_ERR_DECODE',
    streamFailedFromNetworkError: 'OT_MEDIA_ERR_NETWORK',
    mediaSourceNotSupported: 'OT_MEDIA_ERR_SRC_NOT_SUPPORTED',
    devicesNotFound: 'OT_NO_DEVICES_FOUND',
    videoAndAudioDisabled: 'OT_NO_VALID_CONSTRAINTS',
    networkNotConnected: 'OT_NOT_CONNECTED',
    mediaNotSupported: 'OT_NOT_SUPPORTED',
    noPermissionToPublish: 'OT_PERMISSION_DENIED',
    screenSharingNotSupported: 'OT_SCREEN_SHARING_NOT_SUPPORTED',
    screenSharingNotRegistered: 'OT_SCREEN_SHARING_EXTENSION_NOT_REGISTERED',
    screenSharingNotInstalled: 'OT_SCREEN_SHARING_EXTENSION_NOT_INSTALLED',
    setRemoteDescriptionFailed: 'OT_SET_REMOTE_DESCRIPTION_FAILED',
    createStreamFailed: 'OT_STREAM_CREATE_FAILED',
    publishTimeout: 'OT_TIMEOUT',
    deniedAccessToScreenShare: 'OT_USER_MEDIA_ACCESS_DENIED',
    unexpectedServerResponse: 'OT_UNEXPECTED_SERVER_RESPONSE'
}

export const PUBLISHER_ERRORS = {
    hardwareUnavailable: 'OT_HARDWARE_UNAVAILABLE',
    invalidParameter: 'OT_INVALID_PARAMETER',
    mediaAborted: 'OT_MEDIA_ERR_ABORTED',
    mediaDecodeError: 'OT_MEDIA_ERR_DECODE',
    mediaNetworkFail: 'OT_MEDIA_ERR_NETWORK',
    mediaSourceNotSupported: 'OT_MEDIA_ERR_SRC_NOT_SUPPORTED',
    mediaNotSupported: 'OT_NOT_SUPPORTED',
    devicesNotFound: 'OT_NO_DEVICES_FOUND',
    invalidConstraints: 'OT_NO_VALID_CONSTRAINTS',
    screenSharingNotSupported: 'OT_SCREEN_SHARING_NOT_SUPPORTED',
    screenSharingNotRegistered: 'OT_SCREEN_SHARING_EXTENSION_NOT_REGISTERED',
    screenSharingNotInstalled: 'OT_SCREEN_SHARING_EXTENSION_NOT_INSTALLED',
}

export const REPORT_ISSUE_ERRORS = {
    reportIssueFailed: 'OT_REPORT_ISSUE_FAILED'
}

export const SIGNAL_ERRORS = {
    invalidParameter: 'OT_INVALID_PARAMETER',
    networkNotConnected: 'OT_NOT_CONNECTED',
    resourceNotFound: 'OT_NOT_FOUND',
    rateLimitExceeded: 'OT_RATE_LIMIT_EXCEEDED'
}

export const STATS_ERRORS = {
    networkNotConnected: 'OT_NOT_CONNECTED'
}
