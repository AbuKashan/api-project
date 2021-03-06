import React, { Component } from 'react'

export class Newsitem extends Component {
    articles=[
        {
            "source": { "id": null, "name": "New York Times" },
            "author": "Apoorva Mandavilli",
            "title": "Moderna Says Its Booster Significantly Raises Antibodies Against Omicron - The New York Times",
            "description": "A 50-microgram dose increased antibodies by roughly 37-fold, and a full dose of 100 micrograms was even more powerful, the company said.",
            "url": "https://www.nytimes.com/2021/12/20/health/moderna-covid-booster-omicron.html",
            "urlToImage": "https://static01.nyt.com/images/2021/12/20/world/20virus-briefing-moderna/merlin_199252914_b50f66d9-0f8c-47aa-a6a5-cbb762f71335-facebookJumbo.jpg",
            "publishedAt": "2021-12-20T10:00:11Z",
            "content": "The results are based on laboratory tests that do not capture the full range of the bodys immune response against the virus. Although vaccines may not prevent infection from the variant, they are exp… [+1089 chars]"
          },
          {
            "source": { "id": null, "name": "CNBC" },
            "author": "Ryan Browne",
            "title": "Elon Musk says he will pay over $11 billion in taxes this year - CNBC",
            "description": "Elon Musk faces a hefty tax bill this year — possibly the biggest in U.S. history.",
            "url": "https://www.cnbc.com/2021/12/20/elon-musk-says-he-will-pay-over-11-billion-in-taxes-this-year.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106689815-1599150297300-gettyimages-1228323445-urn_newsml_dpa_com_20090101_200903-99-417305-2.jpeg?v=1619510758",
            "publishedAt": "2021-12-20T09:41:26Z",
            "content": "Elon Musk faces a hefty tax bill this year possibly the biggest in U.S. history.\r\n\"For those wondering, I will pay over $11 billion in taxes this year,\" the Tesla CEO tweeted on Monday.\r\nThat's close… [+2014 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "Pro-Beijing 'patriots' sweep Hong Kong election with record low turnout - Reuters",
            "description": "Pro-Beijing candidates swept to victory in an overhauled \"patriots\"-only legislative election in Hong Kong that critics deemed undemocratic, with turnout hitting a record low amid a crackdown on the city's freedoms by China.",
            "url": "https://www.reuters.com/world/china/hong-kong-patriots-only-election-draws-record-low-turnout-2021-12-19/",
            "urlToImage": "https://www.reuters.com/resizer/8ils2CfdyeLQiV5UfL9FfuAcAHA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UYA6FGTHZJO5JHJFI273FT7ELE.jpg",
            "publishedAt": "2021-12-20T09:32:00Z",
            "content": "HONG KONG, Dec 20 (Reuters) - Pro-Beijing candidates swept to victory in an overhauled \"patriots\"-only legislative election in Hong Kong that critics deemed undemocratic, with turnout hitting a recor… [+4570 chars]"
          },
          {
            "source": { "id": null, "name": "BBC News" },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Leftist Gabriel Boric to become Chile's youngest ever president - BBC News",
            "description": "Gabriel Boric, 35, says he will look after democracy after a convincing win over his far-right rival.",
            "url": "https://www.bbc.com/news/world-latin-america-59715941",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1701B/production/_122253249_mediaitem122253246.jpg",
            "publishedAt": "2021-12-20T09:14:03Z",
            "content": "Media caption, A green laser was shone at Chile president-elect Gabriel Boric as he made his victory speech on Sunday\r\nLeftist candidate Gabriel Boric has won Chile's presidential election to become … [+4753 chars]"
          },
          {
            "source": { "id": null, "name": "BBC News" },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Drakeo the Ruler dies after stabbing at LA music festival - BBC News",
            "description": "The 28-year-old was stabbed during an altercation backstage at a Los Angeles music festival.",
            "url": "https://www.bbc.com/news/world-us-canada-59720744",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0FDA/production/_122285040_gettyimages-1359790270.jpg",
            "publishedAt": "2021-12-20T08:44:56Z",
            "content": "Image source, Getty Images\r\nImage caption, The rapper had more than 1.5m monthly listeners on Spotify\r\nUS rapper Drakeo the Ruler has died after being stabbed at a music festival in Los Angeles.\r\nThe… [+3840 chars]"
          },
          {
            "source": { "id": null, "name": "Packers.com" },
            "author": null,
            "title": "Game recap: 5 takeaways from Packers' down-to-the-wire victory over Ravens - Packers.com",
            "description": "Timely stops on defense, strong responses by offense paved way for Green Bay",
            "url": "https://www.packers.com/news/game-recap-5-takeaways-from-packers-down-to-the-wire-victory-over-ravens",
            "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/packers/snwbpes4mhspnd4qw6pz",
            "publishedAt": "2021-12-20T07:37:40Z",
            "content": "3. Had Rodgers completed that last TD toss to make it a three-score game, he also would have broken Brett Favre's franchise record for touchdown passes.\r\nInstead, Rodgers had to settle for a tie with… [+2275 chars]"
          },
          {
            "source": { "id": null, "name": "The Guardian" },
            "author": "Hugo Lowell",
            "title": "Why Trump appears deeply unnerved as Capitol attack investigation closes in - The Guardian",
            "description": "Flurry of recent revelations raises the specter that the committee is swiftly heading towards an incriminating conclusion",
            "url": "https://amp.theguardian.com/us-news/2021/dec/20/capitol-attack-investigation-closes-in-trump",
            "urlToImage": null,
            "publishedAt": "2021-12-20T07:02:00Z",
            "content": "Donald TrumpFlurry of recent revelations raises the specter that the committee is swiftly heading towards an incriminating conclusion\r\nMon 20 Dec 2021 07.00 GMT\r\nDonald Trump is increasingly agitated… [+8668 chars]"
          },
          {
            "source": { "id": null, "name": "ESPN" },
            "author": "Mike Triplett",
            "title": "New Orleans Saints stymie Tom Brady again in stunning shutout win over Tampa Bay Buccaneers - ESPN",
            "description": "The Saints shut out Tom Brady for the first time since 2006 in Sunday's 9-0 victory over the Buccaneers.",
            "url": "https://www.espn.com/nba/story/_/id/32907860/new-orleans-saints-stymie-tom-brady-again-stunning-shutout-win-tampa-bay-buccaneers",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1220%2Fr953385_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-20T06:57:40Z",
            "content": "TAMPA, Fla. -- Replacement head coach Dennis Allen couldn't exactly give the game ball to his defensive coordinator Sunday night after the New Orleans Saints delivered a stunning 9-0 shutout over the… [+4425 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "Manchin delivers potential fatal blow to Biden's $1.75 trillion spending bill - Reuters",
            "description": "U.S. Senator Joe Manchin, a moderate Democrat who is key to President Joe Biden's hopes of passing a $1.75 trillion domestic investment bill, said on Sunday he would not support the package, drawing a sharp rebuke from the White House.",
            "url": "https://www.reuters.com/world/us/senator-manchin-says-he-is-no-bidens-domestic-investment-bill-fox-interview-2021-12-19/",
            "urlToImage": "https://www.reuters.com/resizer/9EPiW-pb4WQcjy1Y6pwb7h0oj4M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OKFASC66CZLK5ONDCY7P5RAVFM.jpg",
            "publishedAt": "2021-12-20T05:59:00Z",
            "content": "WASHINGTON, Dec 20 (Reuters) - U.S. Senator Joe Manchin, a moderate Democrat who is key to President Joe Biden's hopes of passing a $1.75 trillion domestic investment bill, said on Sunday he would no… [+4874 chars]"
          },
          {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Jinky Jorgio and Akanksha Sharma, CNN",
            "title": "Death toll from Super Typhoon Rai climbs to at least 208 in the Philippines - CNN",
            "description": "At least 208 people were killed and hundreds of thousands more displaced after the strongest typhoon to hit the Philippines this year wreaked havoc across the archipelago, causing widespread damage and flooding.",
            "url": "https://www.cnn.com/2021/12/19/asia/super-typhoon-rai-philippines-75-dead-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211216214851-01-super-typhoon-rai-death-super-tease.jpg",
            "publishedAt": "2021-12-20T05:43:00Z",
            "content": null
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "New Zealand links 26-year-old man's death to Pfizer COVID-19 vaccine - Reuters",
            "description": "New Zealand authorities on Monday said they had linked a 26-year-old man's death to Pfizer Inc's <a href=\"https://www.reuters.com/companies/PFE.N\" target=\"_blank\">(PFE.N)</a> COVID-19 vaccine after the person suffered myocarditis, a rare inflammation of the h…",
            "url": "https://www.reuters.com/world/asia-pacific/new-zealand-links-26-year-old-mans-death-pfizer-covid-19-vaccine-2021-12-20/",
            "urlToImage": "https://www.reuters.com/resizer/cwGkwK-smqTh4lr2uCTbyuSdIHw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YMX4DCRRGRNANNKVGSPMYL3K6U.jpg",
            "publishedAt": "2021-12-20T04:59:00Z",
            "content": "SYDNEY, Dec 20 (Reuters) - New Zealand authorities on Monday said they had linked a 26-year-old man's death to Pfizer Inc's (PFE.N) COVID-19 vaccine after the person suffered myocarditis, a rare infl… [+1647 chars]"
          },
          {
            "source": { "id": "ign", "name": "IGN" },
            "author": "Adam Bankhurst",
            "title": "Hades Makes History as the First Video Game to Win a Hugo Award - IGN",
            "description": "Supergiant Games' Hades has made history as it has officially become the first video game to win a Hugo Award.",
            "url": "https://www.ign.com/articles/hades-makes-history-as-the-first-video-game-to-win-a-hugo-award",
            "urlToImage": "https://assets-prd.ignimgs.com/2021/12/20/haees-1623605972205-1639974485533.jpg?width=1280",
            "publishedAt": "2021-12-20T04:31:15Z",
            "content": "Supergiant Games' Hades has made history as it has officially become the first video game to win a Hugo Award.\r\nThe Hugo Awards were first presented in 1953 and honor the best works in science fictio… [+3132 chars]"
          },
          {
            "source": { "id": null, "name": "Deadline" },
            "author": "Rosy Cordero",
            "title": "Carlos Marín Dies: Il Divo Singer Was 53 - Deadline",
            "description": "Il Divo singer Carlos Marín died at the age of 53 in Manchester on Sunday. The cause of death has not been confirmed but it follows a recent hospitalization. The surviving members of the quartet confirmed the news via social media. “It is with heavy hearts th…",
            "url": "https://deadline.com/2021/12/carlos-marin-dies-il-divo-singer-1234899463/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2021/12/AP21354082487724.jpg?w=1024",
            "publishedAt": "2021-12-20T04:15:00Z",
            "content": "Il Divo singer Carlos Marín died at the age of 53 in Manchester on Sunday. The cause of death has not been confirmed but it follows a recent hospitalization.\r\nThe surviving members of the quartet con… [+1538 chars]"
          },
          {
            "source": { "id": null, "name": "MarketWatch" },
            "author": "Mike Murphy",
            "title": "Dow futures slide more than 250 points as market worries mount - MarketWatch",
            "description": "Crude prices also fall as omicron and central bank moves weigh on investors’ minds",
            "url": "https://www.marketwatch.com/story/dow-futures-slide-nearly-300-points-as-market-worries-mount-11639972424",
            "urlToImage": "https://images.mktw.net/im-452574/social",
            "publishedAt": "2021-12-20T03:53:00Z",
            "content": "U.S. stock-index futures fell Sunday night, following a losing week on Wall Street amid worries about Fed policy and the fast-spreading omicron variant of COVID-19.\r\nDow Jones Industrial Average futu… [+1435 chars]"
          },
          {
            "source": { "id": null, "name": "YouTube" },
            "author": null,
            "title": "Watch Jake Paul's KNOCKOUT Rematch With Tyron Woodley - Entertainment Tonight",
            "description": "Watch highlights from Jake Paul and Tyron Woodley’s ‘Leave No Doubt’ rematch, which was held on Saturday night at Amalie Arena in Tampa, Florida. Paul knocke...",
            "url": "https://www.youtube.com/watch?v=tMqBqRMlzZs",
            "urlToImage": "https://i.ytimg.com/vi/tMqBqRMlzZs/maxresdefault.jpg",
            "publishedAt": "2021-12-20T03:35:14Z",
            "content": null
          },
          {
            "source": { "id": null, "name": "Gizmodo.com" },
            "author": "Jody Serrano",
            "title": "NASA Releases an Audio Clip of What Jupiter’s Icy Moon Ganymede Sounds Like - Gizmodo",
            "description": "The space agency created a 50-second audio track with the data gathered by its Juno spacecraft during its flyby of the gigantic moon earlier this year.",
            "url": "https://gizmodo.com/nasa-releases-an-audio-clip-of-what-jupiter-s-icy-moon-1848243513",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0964e54f1a8ae3c5040c3f9399f38163.jpg",
            "publishedAt": "2021-12-20T03:34:00Z",
            "content": "Imagining Ganymede, Jupiters icy moon and the largest moon in our Solar System, can be quite the challenge. (Im still at, Whoa, thats a big moon.) Understanding it is a whole other story, and scienti… [+1796 chars]"
          },
          {
            "source": { "id": "the-hill", "name": "The Hill" },
            "author": "Monique Beals",
            "title": "Goldman lowers 2022 growth forecasts after Manchin says no to BBB | TheHill - thehill.com",
            "description": "Goldman Sachs lowered its GDP forecast for 2022 on Sunday after S...",
            "url": "https://thehill.com/homenews/administration/586514-goldman-revises-down-gdp-forecast-after-manchin-says-no-to-bbb",
            "urlToImage": "https://thehill.com/sites/default/files/article_images/goldmansachs01142015getty.jpg",
            "publishedAt": "2021-12-20T03:29:41Z",
            "content": null
          },
          {
            "source": { "id": null, "name": "Fox Business" },
            "author": "Associated Press",
            "title": "Netherlands 'going into lockdown again' to curb omicron - Fox Business",
            "description": "Nations across Europe moved to reimpose tougher measures to stem a new wave of COVID-19 infections spurred by the highly transmissible omicron variant, with the Netherlands leading the way by imposing a nationwide lockdown.",
            "url": "https://www.foxbusiness.com/markets/netherlands-going-into-lockdown-again-to-curb-omicron",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/12/0/0/AP21352650572075.jpg?ve=1&tl=1",
            "publishedAt": "2021-12-20T03:11:05Z",
            "content": "Nations across Europe moved to reimpose tougher measures to stem a new wave of COVID-19 infections spurred by the highly transmissible omicron variant, with the Netherlands leading the way by imposin… [+7269 chars]"
          },
          {
            "source": { "id": null, "name": "WSB Atlanta" },
            "author": "WSBTV.com News Staff",
            "title": "Former Georgia U.S. Senator Johnny Isakson dies at age 76 - WSB Atlanta",
            "description": "Isakson passed away Sunday morning at age 76 after battling Parkinson’s disease. Channel 2 Action News will have special coverage remembering Isakson throughout the day.",
            "url": "https://www.wsbtv.com/news/local/atlanta/former-georgia-senator-johnny-isakson-dies-age-76/HURLXHCT6NEYNBQG7PD2UD22T4/",
            "urlToImage": "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/3lGPyZOq3DdL1-xj2UA7l_4gf8E=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/PIJZ477Z7EGNSIUXIJVESHLMKM.jpg",
            "publishedAt": "2021-12-20T01:47:00Z",
            "content": "ATLANTA — Statesman, guardsman and even Bulldog are just a few of the titles former Senator Johnny Isakson has held throughout his life of service to our country.\r\nIsakson passed away Sunday morning … [+7254 chars]"
          },
          {
            "source": { "id": null, "name": "Los Angeles Times" },
            "author": "Laura Newberry, Alex Wigglesworth",
            "title": "COVID-19 cases continue to rise in L.A. County as Californians brace for winter surge - Los Angeles Times",
            "description": "L.A. County health officials reported more than 3,500 new coronavirus cases on Sunday, more than double the number of cases recorded just a few days before.",
            "url": "https://www.latimes.com/california/story/2021-12-19/new-covid-numbers",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/81dc664/2147483647/strip/true/crop/6720x3528+0+476/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F03%2F63%2F89a8ed314725ae726401331e7abc%2Fla-photos-1staff-882211-me-covid-testing-lax-gem-007.jpg",
            "publishedAt": "2021-12-20T01:36:00Z",
            "content": "Los Angeles County health officials reported 3,512 new coronavirus cases on Sunday, more than double the number of cases recorded just a few days before. \r\nThat tally follows 3,730 new cases reported… [+2768 chars]"
          }
    ]
    constructor(){
        super();
        this.state={
        articles:this.articles,
        loading:false

        }
    }
    render() {
        let {title,description,imageUrl,url}=this.props;
        return (
            <div>
               <div className="card" style={{width:"18rem"}} >
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
