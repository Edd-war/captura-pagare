<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { fetchCustomers } from '@/services/CustomerService'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'

const customers: Ref<any, any> = ref()
const filters: Ref<any, any> = ref()
const representatives: Ref<any, any> = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png' },
  { name: 'Anna Fali', image: 'annafali.png' },
  { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
  { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
  { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
  { name: 'Onyama Limba', image: 'onyamalimba.png' },
  { name: 'Stephen Shaw', image: 'stephenshaw.png' },
  { name: 'XuXue Feng', image: 'xuxuefeng.png' },
])
const statuses: Ref<string[], string[]> = ref([
  'unqualified',
  'qualified',
  'new',
  'negotiation',
  'renewal',
  'proposal',
])
const loading: Ref<boolean, boolean> = ref(true)

onMounted((): void => {
  fetchCustomers().then((data: any) => {
    customers.value = getCustomers(data)
    loading.value = false
  })
})

const initFilters: () => void = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    'country.name': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  }
}

initFilters()

const formatDate: (value: any) => any = (value: any) => {
  return value.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
const formatCurrency: (value: any) => any = (value: any) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
const clearFilter: () => void = () => {
  initFilters()
}
const getCustomers: (data: any) => any[] = (data: any) => {
  return [...(data || [])].map((d: any) => {
    d.date = new Date(d.date)

    return d
  })
}
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
  <main>
    <DataTable
      :value="customers"
      paginator
      showGridlines
      :rows="10"
      dataKey="id"
      :loading="loading"
    >
      <template #header>
        <div class="flex justify-between">
          <span class="text-lg font-bold">Listado de Movimientos</span>
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
          {{ formatCurrency(data.importe) }}
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
