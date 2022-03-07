const puppeteer = require('puppeteer');

function Status(color) {
    switch (color) {
        case "#0ACF97":
            return "MATRICULADO"
        case "#FA5C7C":
            return "NEGADO"
        case "#8563E7":
            return "PRORROGADO"
        case "#6C757D":
            return "AGUARDANDO ATENDIMENTO"
        case "#39AFD1":
            return "EM ATENDIMENTO"
        case "#FCB44B":
            return "MATRICULA INCONCLUSA"
        case "#995594":
            return "AGUARDANDO BOLSA"
        case "#FE67AA":
            return "LISTA DE ESPERA"
        default:
            return color
    }
}

async function list_interested(email, pass, res) {
    // headless: false - Mostrar a navegação
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--window-size=1920,1080',
        ],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto('https://acrm.sdasystems.org/login');

    // Realiza o login
    await page.type('#emailaddress', email);
    await page.type('#password', pass);
    await page.click('[type="button"]');
    console.log('Login Efetuado com Sucesso!')
        // Aguardar carregar os cookies
    await page.waitForNavigation();

    // pegando URL ACRM
    const url = await page.$$eval("body > div:nth-child(2) > div:nth-child(2) > div > div.l-flex-row > div:nth-child(1) > div > a", (el) => {
        return el.map((a) => a.href);
    });

    await page.goto(url[0]);

    await page.goto("https://sistemas.usb.org.br/acrm-new/pages/atendimento/atendimento.php");

    await page.waitForTimeout(1000);
    console.log('Carregando dados!')

    await page.evaluate(() => {
        btnOpcao('btn-interessados');
    });

    await page.waitForTimeout(2000);

    // pegando Numero de paginas
    const pags = await page.$$eval("#tabela-interessados_paginate > ul > li > a", (el) => {
        return el.map((a) => a.innerText);
    });

    //array de dados
    const arr = []

    for (let index = 0; index <= parseInt(pags[pags.length - 2]); index++) {
        //pegando codigo
        const codes = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(1)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando nome
        const names = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(2)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando contato
        const contacts = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(3)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando serie
        const series = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(4)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando responsavel
        const responsibles = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(5)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando ano
        const years = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(6)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando atendente
        const attendants = await page.$$eval("#tabela-interessados > tbody > tr > td:nth-child(7)", (el) => {
            return el.map((td) => td.innerText);
        });

        //pegando status
        const status = await page.$$eval("#tabela-interessados > tbody > tr", (el) => {
            return el.map((tr) => tr.getAttribute("style"));
        });

        //juntando os dados
        for (const key in codes) {
            arr.push({ code: parseInt(codes[key]), name: names[key], tel: contacts[key], serie: series[key], responsible: responsibles[key], year: years[key], clerk: attendants[key], status: Status(status[key].slice(7).toUpperCase()) })
        }

        await page.click('#tabela-interessados_next');
    }
    await browser.close();
    console.log(`${arr.length}, Leads Encontrados!`)
    res.status(200).json(arr);

}

class ACRM {
    eacf(res) {
        let email = "eacf.aps@educadv.com.br"
        let pass = "bj*G72jJ"
        list_interested(email, pass, res)
    }
    cacli(res) {
        let email = "cacli.aps@educadv.com.br "
        let pass = "gJ>7m%qV"
        list_interested(email, pass, res)
    }
    caegw(res) {
        let email = "caegw.aps@educadv.com.br"
        let pass = "<j6Y%N5j"
        list_interested(email, pass, res)
    }
    caea(res) {
        let email = "caea.aps@educadv.com.br"
        let pass = "c@ea2019"
        list_interested(email, pass, res)
    }
    eatw(res) {
        let email = "eatw.aps@educadv.com.br"
        let pass = "*Eatwhite"
        list_interested(email, pass, res)
    }
    car(res) {
        let email = "car.aps@educadv.com.br"
        let pass = "NZy<8M=3"
        list_interested(email, pass, res)
    }
    cais(res) {
        let email = "cais.aps@educadv.com.br"
        let pass = "&&E92ur9"
        list_interested(email, pass, res)
    }
    cats(res) {
        let email = "cats.aps@educadv.com.br"
        let pass = "C@ts2021$"
        list_interested(email, pass, res)
    }
    eaa(res) {
        let email = "eaa.aps@educadv.com.br"
        let pass = "&3EB&aB4"
        list_interested(email, pass, res)
    }
    eajl(res) {
        let email = "eajl.aps@educadv.com.br"
        let pass = "#E@jl048"
        list_interested(email, pass, res)
    }
    eajp(res) {
        let email = "eajp.aps@educadv.com.br"
        let pass = "8*7uJ7y%"
        list_interested(email, pass, res)
    }
    eap(res) {
        let email = "eap.aps@educadv.com.br"
        let pass = "r>S3d>HP"
        list_interested(email, pass, res)
    }
    cap(res) {
        let email = "eapi.aps@educadv.com.br"
        let pass = "&r72NEEG"
        list_interested(email, pass, res)
    }
    eavb(res) {
        let email = "eavb.aps@educadv.com.br"
        let pass = "9&edL>9u"
        list_interested(email, pass, res)
    }

}

module.exports = new ACRM