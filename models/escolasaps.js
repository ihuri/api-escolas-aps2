const puppeteer = require('puppeteer');

class EscolasAps {
  all(res){
    (async () => {
      // headless: false - Mostrar a navegação
        const browser = await puppeteer.launch({
          headless: true,
          args: [
            '--window-size=1920,1080',
          ],
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080});
    
      await page.goto('https://escolasaps.gestaodeleads.com.br/login.php');
      
      // Realiza o login
      await page.type('[name="usuario"]', 'jackson');
      await page.type('#senha', 'ApS1609@');
      await page.click('[type="submit"]');
    
      // Aguardar carregar os cookies
      await page.waitForNavigation();
    
      //Bloqueando JS pa pagina
      await page.setRequestInterception(true);
      page.on('request', request => {
        if (request.resourceType() === 'script')
          request.abort();
        else
          request.continue();
      });
      
    
      // - Acessar o Cadastros 2022 > Todos
      await page.goto('https://escolasaps.gestaodeleads.com.br/cadastros.php?situacao=0');
    
      console.log('Buscando Informações...')
      // Aguardar carregar os cookies
      await page.waitForTimeout()
      
      // pegando IDs
      const ids = await page.$$eval("#datatable-buttons > tbody > tr > td:nth-child(1)", (el) => {
        return el.map((td) => td.innerText);
      });
    
      // pegando Nomes
      const names = await page.$$eval("#datatable-buttons > tbody > tr > td:nth-child(2)", (el) => {
        return el.map((td) => td.innerText);
      });
    
      // pegando Numeros
      const numbers = await page.$$eval("#datatable-buttons > tbody > tr > td > a", (el) => {
        return el.map((a) => a.innerText);
      });
    
      // pegando Escolas
      const schools = await page.$$eval("#datatable-buttons > tbody > tr > td:nth-child(4)", (el) => {
        return el.map((td) => td.innerText);
      });
    
      // pegando Origen
      const origens = await page.$$eval("#datatable-buttons > tbody > tr > td:nth-child(7)", (el) => {
        return el.map((td) => td.innerText);
      });
    
      // pegando Status
      const status = await page.$$eval("#datatable-buttons > tbody > tr > td:nth-child(8)", (el) => {
        return el.map((td) => td.innerText);
      });
    
      //juntando dados
      const arr = []
      for (const key in ids) {
        arr.push({id: parseInt(ids[key]), name: names[key], tel: numbers[key], school: schools[key], origen: origens[key], status: status[key]})
      }
      await browser.close();

      res.status(200).json(arr)

    })();
  }
}

module.exports = new EscolasAps