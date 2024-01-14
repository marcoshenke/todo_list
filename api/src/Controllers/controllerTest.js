import * as dataTest from '../data/dataTest.json'

export const controllerTest = (req, res) => {
  res.status(200).json(dataTest)
}
