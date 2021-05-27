import db from '@/lib/firebase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const ref = db.ref('views').child(req.query.slug)
      const { snapshot } = await ref.transaction((currentViews) => {
        if (currentViews === null) {
          return 1
        }

        return currentViews + 1
      })

      console.log('update call result --->')
      console.log(snapshot.val())

      return res.status(200).json({
        total: snapshot.val()
      })
    } catch (err) {
      console.log(err)
    }
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(req.query.slug).once('value')
    const views = snapshot.val()
    console.log('get call result --->')
    console.log(views)
    return res.status(200).json({ total: views })
  }
}
