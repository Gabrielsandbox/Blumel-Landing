# Template de Funil Narrativo

Clone estrutural de um funil de diagnostico/aplicacao, feito para trocar a narrativa sem reconstruir a pagina.

## Rodar

```powershell
node server.mjs
```

Abra `http://127.0.0.1:4173`.

## Como replicar outra narrativa

1. Clique em **Editar narrativa**.
2. Altere o JSON do funil.
3. Salve para atualizar a pagina.
4. Use **Exportar JSON** para reaproveitar a narrativa em outro projeto.

O objeto principal fica em `app.js` como `defaultConfig`. Ele controla:

- marca, barra superior e navegacao;
- hero, promessa, CTA e estatisticas;
- sintomas, erros comuns, framework, cases e FAQ;
- formulario multi-etapas de qualificacao.

O envio do formulario ainda e local: os dados aparecem no console do navegador. Para producao, substitua o trecho final de `nextStep()` por Webhook, CRM ou redirecionamento para WhatsApp.
