<script setup lang="ts">
import { ref, onMounted, type Ref, watch } from 'vue'
import { fetchCustomers } from '@/services/CustomerService'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'
import type { FiltrosMovimiento, Movimiento } from '@/models/movimiento'

import Panel from 'primevue/panel'
import Column from 'primevue/column'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import FloatLabel from 'primevue/floatlabel'
import ToggleButton from 'primevue/togglebutton'

const txtNumeroCliente: Ref<string, string> = ref<string>('')
const tgbRecibo: Ref<boolean, boolean> = ref<boolean>(false)
const loading: Ref<boolean, boolean> = ref<boolean>(true)
const customers: Ref<Movimiento[], Movimiento[]> = ref([])
let debounceTimeout: ReturnType<typeof setTimeout> | null = null

// const filters   : Ref<FiltrosMovimiento, FiltrosMovimiento> = ref({
//     numeroCliente: { value: '', matchMode: FilterMatchMode.IN },
//     recibo: {
//         operator: FilterOperator.AND,
//         constraints: [{ value: false, matchMode: FilterMatchMode.EQUALS }],
//     },
// })

const statuses: Ref<string[], string[]> = ref([
    'unqualified',
    'qualified',
    'new',
    'negotiation',
    'renewal',
    'proposal',
])

const debouncedFetchCustomers = () => {
    if (debounceTimeout) clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
        fetchCustomers(txtNumeroCliente.value, tgbRecibo.value).then((data: Movimiento[]) => {
            customers.value = data
            loading.value = false
        })
    }, 1000)
}

watch([txtNumeroCliente, tgbRecibo], debouncedFetchCustomers)

onMounted((): void => {
    loading.value = false
    // fetchCustomers().then((data: any) => {
    //     customers.value = getCustomers(data)
    //     loading.value = false
    // })
})

// const initFilters: () => void = () => {
//     filters.value = {
//         // numeroCliente: { value: null, matchMode: FilterMatchMode.CONTAINS },
//         numeroCliente: { value: null, matchMode: FilterMatchMode.IN },
//         recibo: {
//             operator: FilterOperator.AND,
//             constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
//         },
//     }
// }

// initFilters()

const formatDate: (value: any) => any = (value: any) => {
    return value.toLocaleDateString('en-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}
const formatCurrency: (value: any) => any = (value: any) => {
    return value.toLocaleString('en-MX', { style: 'currency', currency: 'MXN' })
}
// const clearFilter: () => void = () => {
//     initFilters()
// }
// const getCustomers: (data: any) => any[] = (data: any) => {
//     return [...(data || [])].map((d: any) => {
//         d.date = new Date(d.date)

//         return d
//     })
// }
const getSeverity: (
    status: string,
) => 'danger' | 'success' | 'info' | 'warn' | 'secondary' | undefined = (status: string) => {
    switch (status) {
        case 'unqualified':
            return 'danger'

        case 'qualified':
            return 'success'

        case 'new':
            return 'info'

        case 'negotiation':
            return 'warn'

        case 'renewal':
            return 'secondary'
        default:
            return undefined
    }
}
</script>

<template>
    <main class="flex flex-col w-full items-center gap-4">
        <Panel header="Filtro">
            <div class="m-0 flex flex-col md:flex-row gap-2">
                <div>
                    <FloatLabel variant="on">
                        <InputText
                            id="numeroCliente"
                            v-model="txtNumeroCliente"
                            autocomplete="off"
                        />
                        <label for="numeroCliente">Numero de Cliente</label>
                    </FloatLabel>
                </div>
                <div>
                    <ToggleButton
                        id="recibo"
                        v-model="tgbRecibo"
                        class="w-40"
                        onLabel="Con Recibo"
                        offLabel="Sin Recibo"
                    />
                </div>
            </div>
        </Panel>
        <Divider type="solid" />
        <DataTable
            class="w-full md:w-11/12 lg:w-10/12 xl:w-10/12"
            :value="customers"
            paginator
            showGridlines
            :rows="10"
            dataKey="id"
            :loading="loading"
        >
            <template #header>
                <div class="flex justify-between">
                    <span class="text-lg font-bold"> Listado de Movimientos </span>
                </div>
            </template>
            <template #empty> No hay movimientos encontrados. </template>
            <template #loading> Cargando datos... </template>
            <Column field="numeroCliente" header="Numero de Cliente" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ data.numeroCliente }}
                </template>
            </Column>
            <Column field="nombre" header="Nombre" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.nombre }}
                </template>
            </Column>
            <Column field="movimiento" header="Movimiento" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ data.movimiento }}
                </template>
            </Column>
            <Column field="consecutivo" header="Consecutivo" style="min-width: 8rem">
                <template #body="{ data }">
                    {{ data.consecutivo }}
                </template>
            </Column>
            <Column field="importe" header="Importe" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.importeTotal) }}
                </template>
            </Column>
            <Column field="sucursal" header="Sucursal" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ data.sucursal }}
                </template>
            </Column>
            <Column field="fechaEmision" header="Fecha Emisión" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.fechaEmision) }}
                </template>
            </Column>
            <Column field="recibo" header="Recibo" style="min-width: 8rem">
                <template #body="{ data }">
                    {{ data.recibo }}
                </template>
            </Column>
        </DataTable>
    </main>
</template>
