import React from 'react'
import Header from '../../../components/Header'
import HackathonCard from '../../../components/HackathonCard'
import NonHackathonCard from '../../../components/NonHackathonCard'
import './index.css'
import Github from 'react-icons/lib/go/mark-github';


class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NonHackathonCard
          name="Simple Scoreboard"
          description={"A simple two teams scoreboard made in pure javascript"}
          date="2018-04-20"
          link="https://rorscharg.com/simplescoreboard"
          image="simplescoreboard.jpg"
          alt="simplescoreboard.jpg"
          stack="Pure Javascript"
        >
          {' '}
        </NonHackathonCard>
        <HackathonCard
          name="The Salad Bowl"
          description={"Made during ConuHack III, The Salad Bowl is a news aggregator that shows to the user the most relevant news on a specific subject"}
          date="2018-01-28"
          link="https://devpost.com/software/the-salad-bowl"
          image="the-salad-bowl.png"
          alt="the-salad-bowl.png"
          stack="JS, React, Node"
        >
          {' '}
        </HackathonCard>
        <HackathonCard
          name="Troc"
          description="Made during Hackatown 2018, Troc connects people by allowing them to lend, borrow or trade items from each other."
          date="2018-01-20"
          link="https://devpost.com/software/troc-3jdi1m"
          image="troc.png"
          alt="troc.png"
          stack="JS, Node"
        >
          {' '}
        </HackathonCard>
        <div className="footer">
          <a className="external-links" href="https://github.com/rorscharg">
            <Github />
          </a>
          <br/>
          <br/>
          Project section inspired by <a href="https://huangxuan.me/">Hux's</a> website portfolio section
        </div>
      </div>
    )
  }
}

export default BlogIndex
