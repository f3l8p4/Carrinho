<template>
    <div>
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <nuxt-link to="/">
                      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Site de compras</span>
                    </nuxt-link>
                    <div class="dropdown dropdown-end">
                      <button tabindex="0" class="m-1">Click</button>
                      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Não há itens de desenvolvimento</li>
                      </ul>
                    </div>
                  </div>
            </nav>
        </header>
    </div>
</template>
<script>
    export default{
        
    }
</script>