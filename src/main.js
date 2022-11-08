/*
  UI Resources  
*/
//Preact
import {h, Component, render} from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';
// Initialize htm with Preact
const html = htm.bind(h);

/*
  DATA
*/

import Crawls from "./crawls.js"
Crawls.sort((a,b)=> a.title < b.title ? -1 : a.title > b.title ? 1 : 0)

/*
  Declare the main App 
*/

const CrawlRow = (crawl) => {
  let links = Object.entries(crawl.links).map(([key,link]) => {
    return html`<a class="ph1" href=${link} target="_blank">${key}</a>`
  })
  
  return html`
  <tr>
    <td>${crawl.title}</td>
    <td>${crawl.systems.split(",").join(", ")}</td>
    <td>${crawl.tags.split(",").join(", ")}</td>
    <td>${links}</td>
  </tr>
  `
}

class App extends Component {
  constructor() {
    super();
    this.state = {};

    //sub ui components 
    this.UI = {
      h,
      Component,
      render,
      html
    }

  }

  // Lifecycle: Called whenever our component is created
  componentDidMount() {}

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {}

  render(props, state) {
    return html`
      <div>
        <div class="ma2 flex items-center justify-between">
          <h1 class="ma0">Crawl Database</h1>
        </div>
        <div class="pa2 w-100">
          <table class="w-100">
            <tr class="tl">
              <th>Title</th>
              <th>System</th>
              <th>Tags</th>
              <th>Links</th>
            </tr>
            ${Crawls.map(CrawlRow)}
          </table>
        </div>
      </div>
      `
  }
}

render(html`<${App}/>`, document.body);
