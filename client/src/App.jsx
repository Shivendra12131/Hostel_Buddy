import { useState } from 'react'
import StickyNavbar from './components/common/Navbar'
import { FooterWithLogo } from './components/common/Footer'
import { CarouselCustomNavigation } from './components/Carousel'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StickyNavbar />
      {/* <CarouselCustomNavigation /> */}
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint eius distinctio, quibusdam ducimus doloribus, repellendus excepturi illo quis, minus cumque itaque. Quibusdam numquam, a doloribus consequatur officiis tempore repudiandae!
      Eius, magnam sapiente officia minus pariatur debitis, odio quibusdam rem earum voluptatum veritatis odit aliquam asperiores ea repudiandae aliquid qui impedit? Deserunt laudantium eos aut. Illo excepturi ipsa inventore ab.
      Cupiditate quod expedita consequuntur at molestias beatae, ex nemo deleniti impedit laborum explicabo non voluptate iure voluptas minus a velit, ut eum pariatur. Facilis veniam ad, aspernatur aperiam omnis quidem.
      Aspernatur, dolores reiciendis eos nesciunt, commodi tempora aut iure quos laborum optio vero nulla at? Eligendi illum reprehenderit ipsa neque delectus officiis voluptate, debitis quae veritatis quam voluptas accusantium impedit!
      Excepturi repellendus quia reiciendis laudantium natus provident animi nobis, cupiditate eos aspernatur molestias ducimus atque iste debitis, tempora assumenda officia eveniet facere harum magnam. Ab nam harum odio nemo quos?
      Ipsam unde vel animi provident deserunt labore, architecto laudantium doloremque cumque corporis hic minus rerum sit beatae veniam suscipit sint? Repellendus assumenda corporis aliquid voluptas, nihil animi impedit error quo!
      Ipsa illum atque qui sit laboriosam enim non debitis reprehenderit eius tempora. Reprehenderit, vel optio? Aperiam recusandae atque tenetur provident eum voluptates incidunt, dignissimos nulla animi consequatur ex eius ad?
      Incidunt cumque ut sequi reiciendis repudiandae quae natus harum iure? Vero doloribus voluptate excepturi placeat iusto eveniet quidem magni blanditiis soluta aperiam. Repudiandae tempora unde facere beatae ipsam non quasi.
      Voluptas quibusdam dolorem nemo maxime nam sed magni, placeat nisi similique iste, odit numquam iure cumque eius obcaecati amet! Reiciendis voluptatibus praesentium, quasi minima accusamus molestias consequatur ipsam totam est.
      Illo laboriosam esse debitis voluptatum, labore animi ducimus mollitia officia voluptas laborum? Maxime odio porro tempore impedit placeat nobis consequuntur quaerat debitis reiciendis doloremque aliquam, minus commodi quos excepturi cupiditate?
      Voluptate nobis magnam magni quibusdam, modi aperiam perferendis nulla tenetur illo vel at, assumenda repudiandae reprehenderit deserunt numquam commodi voluptatibus natus autem, sed debitis? Unde fuga atque iusto beatae exercitationem.
      Recusandae incidunt vitae sapiente laboriosam sunt magni deleniti, fugit necessitatibus delectus inventore iusto. Unde nesciunt maiores eaque fuga! Ad deleniti quae vitae praesentium magni eveniet quas, velit temporibus quidem repellendus?
      Provident eius illum facere rerum labore voluptas repellendus quod nulla possimus non cumque voluptates harum vel tempora amet illo, quidem distinctio saepe minima. Accusantium nesciunt, repudiandae totam eos optio unde?
      Aspernatur nam delectus mollitia magni tempore a assumenda porro? Odit voluptas accusantium cum molestias optio facilis saepe minus aliquid, dolor consectetur laudantium explicabo eveniet a quae commodi aut! Sunt, impedit.
      Debitis nesciunt eius veniam, sapiente nihil, minus nam, soluta porro aperiam natus dolore ipsam ipsa deserunt dicta sint accusantium facilis quia! Itaque deserunt asperiores dolore ipsam beatae obcaecati libero debitis!
      Perferendis atque, at aspernatur tenetur blanditiis provident veniam, expedita consequatur beatae iure distinctio explicabo odit illum aliquam et placeat totam fugiat. Dolores eaque inventore at ipsa laborum, voluptatum veniam quae.
      Quaerat optio excepturi distinctio dolor provident soluta iusto nemo deserunt alias expedita, quos odit magnam molestiae maiores ullam molestias cupiditate unde dolorem debitis? Fugiat, nihil nostrum reiciendis corporis earum temporibus!
      Vitae, maiores? Possimus mollitia animi libero, dolorem totam ipsam dolor consequuntur modi obcaecati saepe distinctio sint doloribus quidem repudiandae deleniti praesentium cum, quo, repellat tempore vero earum molestiae quae! Tempore.
      Officiis esse autem error, nobis aliquam accusamus cupiditate, repudiandae, minima repellendus eos obcaecati. Repellat recusandae, vero pariatur neque doloremque ipsam! Repudiandae fugit ut cum suscipit facere impedit ea iusto aut!
      Officiis ab deserunt exercitationem, excepturi cumque vero ex accusamus non nostrum qui nisi aliquam, corrupti vitae aperiam, voluptates assumenda possimus? Repellendus deserunt incidunt ea dignissimos vitae praesentium ipsum quaerat dolore.
      Doloremque quo ad reiciendis voluptas dolorum saepe nisi qui quasi aut eum explicabo necessitatibus neque vero sapiente amet harum officia corrupti, ullam beatae, eius dignissimos! Aliquam eligendi assumenda debitis tenetur!
      Porro fugiat numquam ex nemo voluptatum rerum reiciendis doloremque aperiam velit facilis quidem accusamus incidunt iusto explicabo, quibusdam doloribus dolor nesciunt in eaque dolore voluptatibus accusantium repellendus adipisci at! Quisquam.
      Harum, blanditiis reprehenderit doloribus, sunt ea, eos et nesciunt vero tempora mollitia aspernatur asperiores dolores repellendus sint rem beatae nemo accusantium placeat assumenda quo laudantium minima! Soluta nam maxime magnam!
      Dignissimos ad asperiores, in iste modi atque explicabo fugit quisquam nemo harum voluptas quia minima quibusdam aperiam, aut ab dolores architecto nesciunt. At reprehenderit laborum consequatur vel eos necessitatibus vero.
      Ad, ut in totam, dolorum temporibus dolorem rerum ea voluptates nihil dolore optio repellendus expedita dicta quisquam. Amet beatae a officiis! Vel sunt consequatur quae earum delectus aperiam error doloremque?
      Ullam, obcaecati sequi totam eos officia voluptates consequatur vel deserunt, reprehenderit natus nisi, facere aspernatur sit repellendus quibusdam quasi? Soluta ullam dolores veniam tenetur. Porro repudiandae eaque voluptatibus quidem officiis!
      Reprehenderit dicta expedita quis repellendus omnis eaque saepe ducimus esse recusandae impedit labore nihil odio nisi ea deleniti nulla iure, quam odit, sequi ut blanditiis quos animi voluptates mollitia? Optio.
      Consequatur blanditiis eveniet, quam quo, ipsa, facilis ipsam nam fuga a eligendi amet dolore? Odit, doloremque veniam quisquam ut soluta quasi itaque omnis dolores id temporibus inventore voluptatem ea molestiae.
      Excepturi cupiditate libero sint assumenda beatae sapiente porro magni, quidem impedit error totam doloribus fugit similique incidunt quae sit modi, quod odio! Hic est, perspiciatis esse beatae omnis aliquid in?
      Ipsum quas ad odit sapiente, ducimus ea incidunt tempora exercitationem numquam quo? Provident sed praesentium doloremque blanditiis hic et sint aliquid quod vel quis maxime modi amet, ea necessitatibus fugit?
      Similique unde perferendis, accusantium odit possimus et magnam minima quam reiciendis odio, nam sed ducimus quaerat atque quibusdam dicta dolorum quod inventore modi. Tempora mollitia, sed quod molestiae eius doloremque.
      Optio veritatis minima velit, amet iste neque similique commodi temporibus quidem eveniet tempore incidunt earum autem pariatur suscipit reiciendis, possimus odio accusamus labore dolores. Nesciunt non maxime fugit molestias consectetur!
      Exercitationem eos delectus numquam sapiente, repudiandae a non dignissimos omnis quae tenetur quia earum aliquid quisquam dicta iusto, nam maiores magni atque, ex corrupti aliquam. Sit illo eaque iusto culpa.
      Velit perspiciatis totam neque ducimus aut, ullam quos ipsa laborum necessitatibus reiciendis fugit temporibus placeat iste sequi repellendus, dignissimos ut error nemo culpa aperiam! Facilis pariatur iure ad nesciunt expedita!
      Similique quia alias inventore illo illum ipsum! Quos nobis deserunt recusandae expedita illo officia adipisci. Architecto dolorem facilis sed dicta qui vitae, repudiandae asperiores, quaerat laudantium ratione sapiente reprehenderit saepe.
      Alias aut ut perspiciatis reprehenderit voluptatum repellat accusantium a optio quaerat culpa, consectetur laboriosam beatae, enim odio cum dignissimos ullam modi facilis? Nulla molestias veniam saepe ducimus blanditiis. Vitae, voluptatem?
      Neque officia atque officiis laboriosam, similique provident blanditiis voluptatem qui deserunt dolore eos fugit nemo non libero molestiae fugiat nam totam iusto explicabo amet tempora. Neque sed cupiditate laborum beatae.
      Molestiae blanditiis beatae nam minima aliquid sit sunt repudiandae labore minus excepturi! Aliquid rerum fugiat, corporis maxime aspernatur sit impedit. Rerum sit dolorem id, sapiente laboriosam dolor ad consequuntur reprehenderit.
      Dignissimos id facilis quam ab nobis sequi earum asperiores animi doloremque deserunt provident numquam est dolorum, neque in, delectus tenetur? Maxime ad recusandae iusto facilis blanditiis vitae cumque, omnis culpa!
      Nulla veniam earum ipsam voluptates pariatur odio culpa ex assumenda dolorum non est doloremque neque iusto nihil nostrum adipisci, nam distinctio officiis temporibus laudantium expedita eum soluta. Temporibus, eaque illo?
      Architecto, facere possimus exercitationem laborum voluptas laudantium perspiciatis ratione iste, repellendus sit distinctio? Soluta culpa cum aperiam voluptas quaerat odit corporis deleniti reiciendis, ducimus laboriosam ipsam consectetur praesentium, dolores esse.
      Harum, nam. Ducimus voluptas quibusdam nihil laborum eligendi culpa ullam laudantium, ipsam ab itaque reiciendis non minima repellendus expedita maxime et eum. Doloremque fuga, facere error dolores assumenda soluta eos?
      Alias dignissimos deserunt dolores ad vero neque voluptatum, porro cum suscipit possimus quam labore explicabo atque velit impedit libero, autem eligendi praesentium sint magnam quisquam est ipsam odit obcaecati! Voluptatem?
      Magnam porro vel consequatur mollitia rem adipisci nam impedit, fugit in dolor, non cum molestias. Dolorum voluptas, cupiditate doloribus voluptate impedit, mollitia aliquid recusandae, voluptatum dolorem neque amet perspiciatis ea!
      Maxime veritatis ipsam nisi repellat ipsum ad perspiciatis aspernatur numquam accusantium vel et inventore, molestias soluta! Repellat fuga, officia similique officiis omnis qui quae dignissimos, ab, nemo voluptatum quos nobis.
      Eum placeat quam quibusdam ut saepe ex, aperiam natus voluptas, voluptatum dolores, reprehenderit minima at iste sapiente omnis possimus iusto maxime laborum mollitia cum commodi? At sint debitis ratione ad.
      Quae atque voluptatum laudantium quo expedita ex iure maiores sint corporis voluptatem est rem, harum quisquam et repellendus dolore, perspiciatis rerum quis! Vel, voluptas cumque atque omnis consequatur eligendi autem.
      Eveniet maiores praesentium quia quis nostrum laboriosam ipsam possimus eius repellendus. Porro consequatur delectus placeat magni explicabo iure, facere fugit perspiciatis impedit tempore nesciunt voluptatibus quasi, deserunt enim corporis animi?
      Corrupti quod voluptas aliquam excepturi, voluptatibus cumque animi eius laudantium sit dolorem maxime dicta asperiores nesciunt sunt voluptatem et unde, inventore tempore dignissimos. Ab maxime ullam aliquam, accusantium eius ipsam.
      Delectus commodi deleniti natus nemo iure? Labore tenetur ratione vel quo, aut unde id alias illo quia commodi expedita perspiciatis officia odio corporis inventore voluptatem! Quae sit saepe odit tempore.</div> */}
      <Products />
      <FooterWithLogo />
    </>
  )
}

export default App