import withDatabase from "../../../lib/withDatabase";
import attacks from "../../../data/attacks.json";

async function handler(req, res) {
    try {
        const data = attacks;
        const filtredData = {};

        data.forEach((element) => {
            if (!filtredData[element.type]) {
                filtredData[element.type] = [];
            }
            filtredData[element.type].push(element);
        });

        Object.values(filtredData).forEach((el) => {
            el.sort((a, b) => a.name.localeCompare(b.name));
        });

        const sortedTypes = Object.keys(filtredData).sort();
        const unitedArray = sortedTypes.reduce((acc, type) => {
            return acc.concat(filtredData[type]);
        }, []);

        const finalData = unitedArray.map((element,index) => ({
            id: index+1,
            type: element.type,
            name: element.name,
            img_name: element.img_name,
        }));

        console.log(finalData);
        res.status(200).json(finalData);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve Pokémon" });
    }
}

export default withDatabase(handler);
