import { mainData } from "../Model/dataModel.js"


export const getData = async (req, res) => {
    try {
        const thisData = await mainData.find();
        res.status(200).json(thisData);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}