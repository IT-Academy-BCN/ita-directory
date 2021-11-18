const prisma = require("../../prisma/indexPrisma");
const {apiResponse, getRegionByLocationSchema} = require("../utils/utils");
const {formatLocation} = require("../utils/formatLocation")


async function getRegion(req, res) {
    try {
        const {name} = req.body
        await getRegionByLocationSchema.validateAsync(name)
        const formattedName = formatLocation(name)
        const data = []
        const location = await prisma.level.findMany({
            where: {
                name: {
                    contains: formattedName
                }
            },
            orderBy: [
                {
                    level_type_id: 'desc',
                },
            ]
        });

        data.push(location[0])

        for (let i = location[0].level_type_id; i >= 2; i--) {
            let id = location[0].parent_id
            const parent = await prisma.level.findUnique({
                where: {
                    id
                }
            })
            location[0] = parent
            data.push(parent)
        }


        if (location.length == 0) {
            res.status(404).json(
                apiResponse({
                    message: "The location is not in the database or you spelled it wrong",
                })
            )
        }

        res.status(200).json({
            message: "Location fetched",
            data
        })

    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).json(
                apiResponse({
                    message: "Name must be a string.",
                    err: err.message,
                })
            );
        } else {
            res.status(500).json(
                apiResponse({
                    message: "Something wrong occurred with your query.",
                    err: err.message,
                })
            );
        }
    }


}

module.exports = {getRegion}