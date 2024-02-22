
export const languageList = [
  {
    code: "en-US",
    lang: "en",
    language: "English",
  },
  {
    code: "zh-CN",
    lang: "zh",
    language: "简体中文",
  },
  {
    code: "ja-JP",
    lang: "ja",
    language: "日本語",
  }
]

export const getLanguageByLang = (lang) => {
  for (let i = 0; i < languageList.length; i++) {
    if (lang == languageList[i].lang) {
      return  languageList[i];
    }
  }
}
