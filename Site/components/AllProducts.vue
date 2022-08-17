<template>
    <div>
                <tr>
                  <th>{{shop.id}}</th>
                  <td>{{shop.nome}}</td>
                  <td>{{shop.preco}}</td>
                  <td>{{shop.descricao}}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
export default {
    props:['shop']
}
</script>