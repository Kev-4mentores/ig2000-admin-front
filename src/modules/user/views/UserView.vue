<script setup>
    import { computed, ref, onMounted } from 'vue'
    import { useMainStore } from '@/stores/main'
    import {
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiMonitorCellphone,
      mdiReload,
      mdiGithub,
      mdiChartPie
    } from '@mdi/js'
    import * as chartConfig from '@/components/Charts/chart.config.ts'
    import LineChart from '@/components/Charts/LineChart.vue'
    import SectionMain from '@/components/SectionMain.vue'
    import CardBoxWidget from '@/components/CardBoxWidget.vue'
    import CardBox from '@/components/CardBox.vue'
    import TableSampleClients from '@/components/TableSampleClients.vue'
    import NotificationBar from '@/components/NotificationBar.vue'
    import BaseButton from '@/components/BaseButton.vue'
    import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
    import CardBoxClient from '@/components/CardBoxClient.vue'
    import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
    import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
    import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'
    
    const chartData = ref(null)
    
    const fillChartData = () => {
      chartData.value = chartConfig.sampleChartData()
    }
    
    onMounted(() => {
      fillChartData()
    })
    
    const mainStore = useMainStore()
    
    const clientBarItems = computed(() => mainStore.clients.slice(0, 4))
    
    const transactionBarItems = computed(() => mainStore.history)
    </script>
    
    <template>
      <LayoutAuthenticated>
        <SectionMain>
          <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Usuarios" main>
            <BaseButton
              href="https://github.com/justboil/admin-one-vue-tailwind"
              target="_blank"
              :icon="mdiGithub"
              label="Star on GitHub"
              color="contrast"
              rounded-full
              small
            />
          </SectionTitleLineWithButton>

          <NotificationBar color="info" :icon="mdiMonitorCellphone">
            <b>Responsive table.</b> Collapses on mobile
          </NotificationBar>
    
          <CardBox class="mb-6" has-table>
            <TableSampleClients checkable />
          </CardBox>
    
        
         

        </SectionMain>
      </LayoutAuthenticated>
    </template>
    