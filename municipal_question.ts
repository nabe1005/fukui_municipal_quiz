export interface MunicipalQuestion {
    imgPath: string
    choices: string[]
    correctIndex: number
}

export const municipal_list: { [key: string]: string } = {
    "images/awara.png": "あわら市",
    "images/echizen-cho.png": "越前町",
    "images/echizen-shi.png": "越前市",
    "images/eiheiji.png": "永平寺町",
    "images/fukui.png": "福井市",
    "images/ikeda.png": "池田町",
    "images/katuyama.png": "勝山市",
    "images/mihama.png": "美浜町",
    "images/minamiechizen.png": "南越前町",
    "images/obama.png": "小浜市",
    "images/ooi.png": "おおい町",
    "images/oono.png": "大野町",
    "images/sabae.png": "鯖江市",
    "images/sakai.png": "坂井市",
    "images/takahama.png": "高浜町",
    "images/turuga.png": "敦賀市",
    "images/wakasa.png": "若狭町"
}