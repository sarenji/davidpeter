import Layout from 'components/layout';
import Body from 'components/styled-body';
import { getTags } from 'utils/data';

const Page = ({ posts, tags }) => (
  <Layout tags={tags}>
    <Body>
      <h1>Hi!</h1>

      <p>I'm David. I write code and words. I'm passionate about accessibility and disability.</p>

      <p>If you found this website inaccessible, I would definitely appreciate an email at david.a.peter [at] gmail.com. However, no pressure to educate me.</p>

      <h2>Writing</h2>

      <dl>
        <dt>
          <a href="https://www.kickstarter.com/projects/dpeter/fanfiction-for-pets">
            Fanfiction for Pets
          </a>
        </dt>
        <dd>Kickstarter</dd>
        <dd>Delivered December 31, 2017</dd>
        <dt>
          <a href="https://modelviewculture.com/pieces/building-accessibility-culture">
            Building Accessibility Culture
          </a>
        </dt>
        <dd>Model View Culture, Issue 38</dd>
        <dd>June 22, 2016</dd>
        <dt>
          <a href="https://modelviewculture.com/pieces/the-hearing-monoculture-rejects-those-who-cant-hear">
            The Hearing Monoculture Rejects Those Who Can't Hear
          </a>
        </dt>
        <dd>Model View Culture, Issue 17</dd>
        <dd>February 24, 2015</dd>
      </dl>

      <h2>Speaking</h2>

      <dl>
        <dt>
          <a href="https://alterconf.com/talks/deafness-tech-world">
            Deafness in the Tech World
          </a>
        </dt>
        <dd>AlterConf NYC</dd>
        <dd>October 4, 2014</dd>
      </dl>

      <h2>Coding</h2>

      <p>I specialize in JavaScript, particularly for the frontend. I am experienced in Ruby on Rails.</p>

      <h3>Kickstarter: March 2014 to November 2017</h3>

      <p>Brooklyn, NY</p>

      <ul>
        <li>Joined as the third frontend engineer. We still used jQuery soup then.</li>
        <li>Did a lot of Ruby on Rails. Frontend developers, in the beginning, wore many hats.</li>
        <li>Introduced accessibility as a product value. Helped educate coworkers and set up processes for accessibility.</li>
        <li>
          Implemented <a href="https://www.kickstarter.com/blog/introducing-subtitles-and-captions">
            subtitles and captions
          </a> for all videos, including a tool to help users generate their own.
        </li>
        <li>Helped architect the new frontend codebase in Webpack, ES6, React, redux, and GraphQL. This included education and architecture ideation, implementation, and processes.</li>
        <li>Became team lead for the biggest feature team. Worked on a significant React/redux project that involved GraphQL. Led 4 engineers.</li>
      </ul>

      <h3>Apple (Intern): June 2013 to August 2013</h3>

      <p>Cupertino, CA</p>

      <ul>
        <li>Did data analysis.</li>
        <li>Introduced automated testing to my team's stack.</li>
      </ul>

      <h3>1000memories: May 2011 to May 2012</h3>

      <p>San Francisco, CA</p>

      <ul>
        <li>~10 people worked for this startup.</li>
        <li>Worked as an intern for 3 months, then took a break in college to work full-time for the remaining 9 months.</li>
        <li>Developed core client logic in JavaScript, and, later, CoffeeScript.</li>
        <li>Implemented a dynamic photo uploader and photo importer. The importer integrated with the Instagram and Facebook APIs. Within 2 weeks of release, imported photos amounted to over 25% of all total photos on the site.</li>
        <li>Helped write the core 1000memories API, written in Sinatra (Ruby).</li>
        <li><a href="https://github.com/rails/rails/commit/27d327e63a3ac661cd22b207d9022f8661163853">Had a patch to Ruby on Rails accepted</a>.</li>
      </ul>

      <h2>Education</h2>

      <p>I graduated <em>summa cum laude</em> from the Rochester Institute of Technology (RIT). (Oblige me a little here; where else could I be proud of a 4.0 GPA? And yet, if you were to ask me if the GPA was worth the work, I would say no.)</p>
    </Body>
  </Layout>
);

Page.getInitialProps = () => {
  const tags = getTags();

  return { tags };
};

export default Page;
