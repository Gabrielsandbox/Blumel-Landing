# Blumel Landing - Captacao de Matriculas

Landing page para captacao de matriculas de escolas e faculdades. A narrativa posiciona a Blumel como operadora do funil inteiro: aquisicao multicanal, qualificacao, conducao, follow-up e entrega da oportunidade pronta para a instituicao converter.

## Rodar

```powershell
node server.mjs
```

Abra `http://127.0.0.1:4173`.

## Editar narrativa

1. Clique em **Editar narrativa**.
2. Altere o JSON da landing.
3. Salve para atualizar a pagina.
4. Use **Exportar JSON** para reaproveitar a narrativa.

O objeto principal fica em `app.js` como `defaultConfig`. Ele controla:

- marca, barra superior e navegacao;
- hero, promessa, CTA e estatisticas;
- dores, mentiras, mecanismo, autoridade, diagnostico e FAQ;
- formulario multi-etapas de qualificacao;
- agenda integrada com Calendly depois do quiz.

Para usar o Calendly real, troque `calendar.url` em `app.js` pelo link do evento de diagnostico.

O envio do formulario ainda e local: os dados aparecem no console do navegador. Para producao, substitua o trecho final de `nextStep()` por Webhook, CRM ou redirecionamento para WhatsApp.
