import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5f65802224f849c19cc3dc41318ac64a'
  }
})