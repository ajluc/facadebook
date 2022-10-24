const db = require('../db')
const Style = require('../models/style')

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

const main = async () => {
  const styles = [
    {
      styleName: 'Modern',
      timeFrame: 'Early to Mid 20th Century',
      exImg:
        'https://cdn.vox-cdn.com/thumbor/WjZY7ba_DFUsRvbhiWKm8lSkW1k=/0x0:2403x3000/1200x900/filters:focal(1010x1308:1394x1692)/cdn.vox-cdn.com/uploads/chorus_image/image/59950897/gri_2004_r_10_b199_2980_20k.1528147238.jpg'
    },
    {
      styleName: 'Post-Modern',
      timeFrame: 'Mid to Late 20th Century',
      exImg:
        'https://static.dezeen.com/uploads/2017/01/kengo-kuma-m2-building-architecture-tokyo_dezeen_2364_col_6-1704x1590.jpg'
    },
    {
      styleName: 'Neoclassical',
      timeFrame: '18th to Early 19th Century',
      exImg:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Monticello_reflected.JPG'
    },
    {
      styleName: 'Classical',
      timeFrame: '5th Century BCE in Greece to 3rd Century CE in Rome',
      exImg:
        'https://cdn.britannica.com/11/114911-050-FA86DB3F/ruins-Temple-of-Apollo-Greece-Corinth.jpg'
    },
    {
      styleName: 'Parametric',
      timeFrame: 'Early 21st Century',
      exImg:
        'https://parametric-architecture.com/wp-content/uploads/2020/04/HAC_Hufton_Crow_Zaha_Hadid_PA.jpg'
    }
  ]

  await Style.insertMany(styles)
  console.log('Created some styles')
}

const run = async () => {
  await main()
  db.close()
}

run()
