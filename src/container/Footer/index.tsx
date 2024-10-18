import logo from '../../assets/image/logo.png'
import instagram from '../../assets/image/instagram.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'
import { FooterCss, Logo, RedesSociais } from './styles'

const Footer = () => (
  <FooterCss>
    <Logo src={logo} alt="" />
    <RedesSociais>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </RedesSociais>
    <div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterCss>
)

export default Footer
