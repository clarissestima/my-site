import './Buttons.css'

const buttons = [
  { href: 'https://nekoweb.org/', src: '/files/img/buttons/nekoweb.gif' },
  { href: 'https://nekoweb.org/', src: '/files/img/buttons/nekowebButton7.gif' },
  { href: 'https://eye.nekoweb.org/main.html', src: '/files/img/buttons/eye.gif' },
  { href: 'https://eye.nekoweb.org/main.html', src: '/files/img/buttons/eye2.gif' },
  { href: 'https://eye.nekoweb.org/main.html', src: '/files/img/buttons/eye3.gif' },
  { href: 'https://trademarkhell.net/', src: '/files/img/buttons/trademark.png', alt: 'trademarkization company of 2003' },
  { href: 'https://trademarkhell.net/', src: '/files/img/buttons/tm.gif', alt: 'trademarkization company of 2003' },
  { href: 'https://lukasworkshop.nekoweb.org', src: '/files/img/buttons/lukas.gif' },
  { href: 'https://medjed.nekoweb.org/', src: '/files/img/buttons/medjed.jpg' },
  { href: 'https://bleu.nekoweb.org/', src: '/files/img/buttons/everythingisblurry.gif' },
  { href: 'https://adilene.net/', src: '/files/img/buttons/virtualdiva.png' },
  { href: 'https://ctrlaus.nekoweb.org', src: '/files/img/buttons/austinbutton.jpg' },
  { href: 'https://moosyu.nekoweb.org/', src: '/files/img/buttons/moosyu.gif', target: '_blank' },
  { href: 'https://moosyu.nekoweb.org/', src: '/files/img/buttons/moosyu2.png', target: '_blank' },
  { href: 'https://rice.nekoweb.org/', src: '/files/img/buttons/rice.gif' },
  { href: 'https://rice.nekoweb.org/', src: '/files/img/buttons/rice2.gif' },
  { href: 'https://rice.nekoweb.org/', src: '/files/img/buttons/rice3.png' },
  { href: 'https://rice.nekoweb.org/', src: '/files/img/buttons/rice4.gif' },
  { href: 'https://rice.nekoweb.org/', src: '/files/img/buttons/rice5.png' },
  { href: 'https://rice.nekoweb.org/', src: '/files/img/buttons/rice6.gif' },
  { href: 'https://july.lol/', src: '/files/img/buttons/julylol.gif' },
  { href: 'https://mlg.2000.hu/', src: '/files/img/buttons/mlg2460.gif' },
  { href: 'https://thinliquid.dev', src: '/files/img/buttons/thnlqd.png', alt: 'thinliquid' },
  { href: 'https://amoebalous.nekoweb.org/', src: '/files/img/buttons/jillspage.gif', target: '_blank' },
  { href: 'https://bang1338.nekoweb.org', src: '/files/img/buttons/bang.gif', target: '_blank', imgStyle: { height: '31px', width: '88px' } },
  { href: 'https://lel.nekoweb.org/', src: '/files/img/buttons/lel.png' },
  { href: 'https://evehibi.nekoweb.org/', src: '/files/img/buttons/evehibi.gif' },
  { href: 'https://neoratz.neocities.org/links', src: '/files/img/buttons/neoratz.gif' },
  { href: 'https://dokode.moe/indexv3', src: '/files/img/buttons/dokodemo.gif' },
  { href: 'https://local98.nekoweb.org', src: '/files/img/buttons/local98.gif' },
  { href: 'http://snails.nekoweb.org', src: '/files/img/buttons/snails.png' },
  { href: 'https://glassplanet.neocities.org/', src: '/files/img/buttons/glassplanet.gif', alt: 'Glass Planet' },
  { href: 'https://remblanc.nekoweb.org', src: '/files/img/buttons/remblanc.png', alt: 'remblanc', title: 'this quirk of my button link is not very likely to reach many of its users at this point' },
  // Add more entries here as needed (copiar do HTML original)
];

function Buttons() {
  return (
    <div className="buttons-container">
      <marquee behavior="scroll" scrollamount="14" style={{ display: 'block' }}>
        <div id="nekoweb-buttons-block">
          {buttons.map((b, i) => (
            <div className="nekoweb-button" key={i}>
              <a href={b.href} tabIndex={-1} target={b.target} rel={b.target === '_blank' ? 'noopener noreferrer' : undefined}>
                <img src={b.src} alt={b.alt || ''} style={b.imgStyle} />
              </a>
              <span className="tooltip" style={{ display: 'none' }} />
            </div>
          ))}
        </div>
      </marquee>
    </div>
  )
}

export default Buttons