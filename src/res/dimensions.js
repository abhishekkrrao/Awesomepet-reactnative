'use strict'

import { Platform } from "react-native"

export default {
    titleFontSize: 20,
    headerHeight: Platform.OS == "ios" ? 65 : 55,
    activeOpacity: 0.5
}
