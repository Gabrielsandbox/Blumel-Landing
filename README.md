# Blumel Landing - Captação de Matrículas

Landing page para captação de matrículas de escolas e faculdades. A narrativa posiciona a Blumel como operadora do funil inteiro: aquisição multicanal, qualificação, condução, follow-up e entrega da oportunidade pronta para a instituição converter.

## Rodar

```powershell
node server.mjs
```

Abra `http://127.0.0.1:4173`.

## Editar narrativa

1. Clique em **Editar narrativa**.
2. Altere o JSON da landing.
3. Salve para atualizar a página.
4. Use **Exportar JSON** para reaproveitar a narrativa.

O objeto principal fica em `app.js` como `defaultConfig`. Ele controla:

- marca, barra superior e navegação;
- hero, promessa, CTA e estatísticas;
- dores, mentiras, mecanismo, autoridade, diagnóstico e FAQ;
- formulário multi-etapas de qualificação;
- agenda integrada com Calendly depois do quiz.

Para usar o Calendly real, troque `calendar.url` em `app.js` pelo link do evento de diagnóstico.

O envio do formulário ainda é local: os dados aparecem no console do navegador. Para produção, substitua o trecho final de `nextStep()` por Webhook, CRM ou redirecionamento para WhatsApp.
