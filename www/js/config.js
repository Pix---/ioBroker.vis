var visConfig = {
    widgetSets: [
        "basic",
        {name: "fancyswitch", depends: ["basic"]},
        {name: "metro",       depends: ["basic"]}
        /*,
        "bars",
        "bko",
        "colorpicker",

        {name: "homematic", depends: ["basic", "jqui"]},
        "knob",
//        {name: "hqWidgets", edit: "hqWidgetsEdit"},
        "jqplot",
        {name: "jqui",     depends: ["basic"]},
        {name: "jqui-mfd", depends: ["basic", "jqui"]},
        {name: "lcars",    depends: ["basic"]},
        "RGraph",
        "special",
        "swipe",
        "timeAndWeather",
        "weather-adapter",
        "table",
        "dev"*/
    ],
    language: window.navigator.userLanguage || window.navigator.language
};
