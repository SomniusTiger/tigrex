import type { NextPage } from 'next'

import Header from '../components/shared/Header';
import Metatags from '../components/meta/Metatags';

const Home: NextPage = () => {
  return (
    <div>
    <Metatags />
    <Header />
    <div />

    <section>
      <img src="/images/somnius.svg" width="100%" alt="A small white tiger in a fancy outfit" />
      <p>
        Welcome. This is the digital home of Somnius. This is my personal wiki, where I can compile notes about both things I have made and other things I find it useful to share.
      </p>
    </section>
  </div>
  )
}

export default Home
