import "./App.css";
import Header from "../.././components/header";
import SearchBar from "../.././components/searchBar";
import FinancialInfo from "../.././components/financialInfo/financialInfo/financialInfo";
import Divider from "@mui/material/Divider";
import NewsSection from "../.././components/newsSection/newsSection/newsSection";
import { useEffect, useState } from "react";
import {
  BASE_URL_API_TICKERINFO,
  BASE_URL_API_COINGECKO,
} from "../.././config";
import axios from "axios";

function App() {
  const [coinsList, setCoinsList] = useState([]);

  useEffect(() => {
    // setCoinsList(GetCoinsList())
    const load = async () => {
      const url = BASE_URL_API_COINGECKO + "coins/list";
      const params = { include_platform: false };

      const responseData = await axios.get(url, params);
      // console.log(responseData.data)
      setCoinsList(responseData.data);
    };
    load();
  }, []);

  const [data, setData] = useState({
    identifier: "Bitcoin",
    asset_name: "Bitcoin",
    daily_price_variation: -2.31832,
    weekly_price_variation: 11.76235,
    market_cap: 533756643843,
    current_price: 27671,
    sparkline: [
      24410.609630193478, 24516.56079337933, 24403.5494659232,
      24478.38430466262, 24598.369655875988, 24557.65441808675,
      24470.88205445031, 24375.9295092638, 24475.271950962127,
      24516.218550735783, 24422.63822973852, 24398.165047047198,
      24510.30672291863, 24696.429404530147, 24718.9915517189,
      24730.28129747348, 24826.791485966107, 25115.52971766906,
      24994.007310680772, 24879.074051763568, 25014.287139261098,
      25047.200018165368, 25063.232466334084, 24952.901944704994,
      24860.079103376273, 24947.83238849245, 25059.750596956594,
      24851.30235343408, 25103.51118448701, 25116.780421336913,
      25166.029424758133, 25076.024083679393, 25741.588200453516,
      25818.189916341948, 25864.00769443923, 25904.928311498516,
      25898.895135586827, 26329.637046055537, 26214.772369205864,
      26158.87194757435, 26427.63182210504, 26817.869726969802,
      27084.76471501015, 26784.0475634558, 26653.468787858637,
      26396.068929757705, 26561.1575833419, 26566.709959555843,
      26618.393103473772, 26642.65413285275, 26882.703218156807,
      26872.633478369087, 27269.751882794444, 27742.56730419985,
      27454.092345483394, 27710.295055502036, 27494.337717553793,
      27445.352514421415, 27441.673614167797, 27474.098368255283,
      27804.542131689355, 27608.992574187047, 27506.083804788814,
      27402.917920905922, 27531.589121390465, 27605.29681414615,
      27580.51848203445, 27673.782703161145, 27568.65132863367,
      27677.177457027617, 27413.219280424782, 27356.739376378075,
      27457.570850164277, 27420.084097608957, 27502.833807720843,
      27522.260694125962, 27399.564950037668, 27126.21038189572,
      27124.652906181986, 27267.24261409408, 27319.087664217812,
      27319.31420792679, 27359.21952530413, 27324.78733235095,
      27266.355391351244, 27122.66773886824, 27157.799501043388,
      27182.84199829757, 27238.465164906407, 27226.274597285057,
      27325.036774961274, 27421.158271462824, 27365.966558370656,
      27470.99995925533, 27759.282331716247, 28141.506879232136,
      28100.154278815622, 28341.52776458604, 28376.48246091515,
      28038.69586124248, 28167.573990980018, 28277.7137622549,
      28133.48527609605, 28038.235903730918, 27846.412210173265,
      27602.100596768156, 27465.206770213725, 27606.204131333387,
      27591.099545336616, 27873.27842887241, 28374.629820408125,
      28500.164499808237, 28363.243288114227, 28298.503036191098,
      28373.890428636583, 28417.586260101016, 27973.738781924432,
      28179.317746020937, 28034.128021544704, 27881.292218666982,
      27901.876170550073, 28192.670752151833, 28046.412524833264,
      28239.10263844189, 28265.12603228938, 28233.87063624655,
      27960.961697157865, 28115.920999810336, 28093.496921587102,
      28024.838877955415, 27967.194563679157, 28127.47311149861,
      27988.590045028493, 27893.8717507881, 27743.731861826895,
      27851.32601093579, 28175.04892281938, 28219.800433352655,
      28295.666458029933, 28432.31958863622, 28257.202242856685,
      28103.00611700219, 28266.696872468296, 28617.570560839817,
      28248.039696797292, 28301.63545730713, 28333.76069698013,
      28239.737909389765, 28197.0324867261, 28217.53621768342,
      28294.102225322193, 28152.771010465058, 28244.43391063248,
      28217.014099591288, 28322.76057456111, 28376.1677690613,
      28371.252866073635, 28353.551588950824, 28269.678525115552,
      28286.399031197296, 28249.446585628688, 28325.788457903254,
      28293.920871143207, 28401.23567674259, 28475.570229403787,
      28739.986682874245, 28783.513771568014, 28792.012531509805,
    ],
    news_list: [
      {
        title:
          "Before the Bell: ASX to rise, equities rally in Europe, New York",
        description:
          "Australian shares are poised to open higher, bolstered by gains overseas. Bitcoin extends rise. $A slumps. Fed decision awaited.",
        source: "Australian Financial Review",
        url_to_image:
          "https://static.ffx.io/images/$zoom_0.1839%2C$multiply_4%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_110/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/029982f2475bc94732e55c7969615a8931198db4",
        url: "http://www.afr.com/markets/equity-markets/asx-to-rise-equities-rally-in-europe-new-york-20230322-p5cu5q",
      },
      {
        title:
          "Bitcoin-Kurs aktuell: Anleger erwarten FOMC-Meeting – BTC über 28.000 Dollar",
        description:
          "Die Turbulenzen im Bankensektor halten weiter an, die US-Zentralbank FED steht vor einer wichtigen Entscheidung. Bitcoin hält sich oberhalb einer wichtige Marke. Aktuelle Nachrichten im Bitcoin-Newsblog.",
        source: "Wirtschafts Woche",
        url_to_image:
          "https://www.wiwo.de/images/file-photo-illustration-shows-representations-of-cryptocurrency-bitcoin/28435878/2-format11240.jpg",
        url: "https://www.wiwo.de/finanzen/boerse/bitcoin-kurs-btc-aktuell-anleger-erwarten-fomc-meeting-bitcoin-oberhalb-von-28-000-dollar/27382428.html",
      },
      {
        title:
          "Magic Eden launches Bitcoin marketplace as Ordinal inscriptions continue to grow",
        description:
          "Magic Eden, one of the largest cross-chain NFT platforms, launched a Bitcoin marketplace for digital artifacts as Ordinals continue to grow",
        source: "TechCrunch",
        url_to_image:
          "https://techcrunch.com/wp-content/uploads/2023/03/Screenshot-2023-03-21-at-10.49.55-AM.png?resize=1200,612",
        url: "https://techcrunch.com/2023/03/21/magic-eden-launches-bitcoin-marketplace-as-ordinal-inscriptions-continue-to-grow/",
      },
      {
        title: "Mercati divisi tra vecchi e (nuovi) beni rifugio",
        description:
          "Durante le recenti fasi di tempesta finanziaria gli investitori hanno comprato oro e bond (come da copione) ma a sorpresa anche Nasdaq e Bitcoin....",
        source: "Il Sole 24 Ore",
        url_to_image:
          "https://i2.res.24o.it/stream/assets/img/20230321/AEqKbi7C//d288cc2c-c7d6-11ed-b3fe-fed233f683c1-testoFgFotoAlt2.jpg",
        url: "https://www.ilsole24ore.com/channel/mediacenter/type/video/uuid/AEqKbi7C",
      },
      {
        title:
          "Euro und Dollar nur Bonbonpapier: Russland würde Bitcoin für Gaslieferungen akzeptieren",
        description:
          "Der oberste russische Energiebeauftragte Pawel Zavalny hat die Bereitschaft seines Landes erklärt, Bitcoin-Zah",
        source: "T3n",
        url_to_image: "https://t3n.de/news/wp-content/uploads/2021/11/duma.jpg",
        url: "https://t3n.de/news/euro-dollar-nur-bonbonpapier-1461506/",
      },
    ],
  });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 12,
    }).format(value);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar data={data} setData={setData} coinsList={coinsList} />
      <FinancialInfo
        daily_price_variation={formatCurrency(data.daily_price_variation)}
        weekly_price_variation={formatCurrency(data.weekly_price_variation)}
        market_cap={formatCurrency(data.market_cap)}
        current_price={formatCurrency(data.current_price)}
        sparklineData={data.sparkline}
      />
      <Divider
        sx={{
          background: "#F0F0F0",
          my: "3rem",
        }}
      ></Divider>
      <NewsSection newsList={data.news_list} />
    </div>
  );
}

export default App;
