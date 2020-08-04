import config from '../config';

const url_videos = `${config.url_backend}/videos`;

function create(objetoDoVideo) {
  return fetch(`${url_videos}?_embed=videos` {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('erro');
    });
}

export default {
  create,
};
