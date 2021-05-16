import { api } from '../../../service/api';


const getJokesRandom = async () => {
  const request = await api.get('random')
  return request.data
}

const getJokesCategory = async () => {
  const request = await api.get('categories')
  return request.data
}

let Home = {
  is_private: false,



  render: async () => {
    const jokes = await getJokesRandom();
    const categories = await getJokesCategory();
    console.log(jokes)

      let view = `
          <nav>
          
           <ul class="menu-list">
            ${categories.map( (category, index) => (
              `<li class="menu-item" key=${index}>${category}</li>`
            )).join('')}
           </ul>
           </nav>
           <div class="container">
           <!-- <img src=${jokes.icon_url}> -->
            <h1>${jokes.value}</h1>
            
          </div>
      `;

      return view
  },

  after_render: async () => {

  }
}

export default Home;