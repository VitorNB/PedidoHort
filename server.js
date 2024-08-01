const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xl = require('excel4node');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        res.json({ token: 'seu-token' });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

app.post('/api/pedido', (req, res) => {
    const { empresas, frutasLegumes } = req.body;
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Pedido');

    ws.cell(1, 1).string('Empresas');
    empresas.forEach((empresa, index) => {
        ws.cell(index + 2, 1).string(empresa);
    });

    ws.cell(1, 2).string('Frutas e Legumes');
    ws.cell(2, 2).string(frutasLegumes);

    const filePath = '/tmp/pedido.xlsx';
    wb.write(filePath, async function(err) {
        if (err) {
            return res.status(500).json({ error: 'Erro ao gerar planilha' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'seu-email@gmail.com',
                pass: 'sua-senha'
            }
        });

        const mailOptions = {
            from: 'seu-email@gmail.com',
            to: 'vitor.nogueira@economart.com.br',
            subject: 'Pedido de Frutas e Legumes',
            text: 'Segue em anexo o pedido de frutas e legumes.',
            attachments: [{ path: filePath }]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: 'Erro ao enviar email' });
            }
            res.json({ success: true });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
