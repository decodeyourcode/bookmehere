const supabase = require('../database.js');

const bookController = {
    getUserDiary: async(req, res) => {
        
        try {
            const {data: events} = await supabase
            .from('user_info')
            .select(`
                id,
                name,
                working_days,
                working_timings
            `)
            return res.json({msg: "OK", data: events})
            
        } catch (error) {
            return res.json({msg: "NOT_OK", data: error});
        }
    },
    /* create: async(req, res) => {
        try {
            const { name, price } = req.body

            const sql = 'INSERT INTO books(name, price) VALUES($1, $2) RETURNING *'

            const { rows } = await postgre.query(sql, [name, price])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateById: async(req, res) => {
        try {
            const { name, price } = req.body

            const sql = 'UPDATE books set name = $1, price = $2 where book_id = $3 RETURNING *'

            const { rows } = await postgre.query(sql, [name, price, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteById: async(req, res) => {
        try {
            const sql = 'DELETE FROM books where book_id = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "not found"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    }*/
}

module.exports = bookController