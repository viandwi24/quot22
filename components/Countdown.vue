<script lang="ts" setup>
import moment from 'moment'
// COUNTDOWN
const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  months: '00',
  years: '1000',
})
const targetDate = '2023-01-01 00:00:00'
const isNewYear = ref(false)
const updateCountdown = () => {
  const target = moment(targetDate)
  const now = moment()
  const diff = target.diff(now)
  const duration = moment.duration(diff)
  const years = duration.years().toString()
  const months = duration.months().toString().padStart(2, '0')
  const days = duration.days().toString().padStart(2, '0')
  const hours = duration.hours().toString().padStart(2, '0')
  const minutes = duration.minutes().toString().padStart(2, '0')
  const seconds = duration.seconds().toString().padStart(2, '0')
  countdown.value = { days, hours, minutes, seconds, years, months }

  // check
  isNewYear.value = now.isAfter(target)
}
let countdownInterval: NodeJS.Timer
onMounted(() => {
  countdownInterval = setInterval(updateCountdown, 1000)
})
onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})
</script>

<template>
  <div>
    <div v-if="!isNewYear">
      <span>- </span>
      <span>{{ countdown.hours }}</span>
      <span>:</span>
      <span>{{ countdown.minutes }}</span>
      <span>:</span>
      <span>{{ countdown.seconds }}</span>
    </div>
    <div v-else class="flex space-x-1">
      <span class="text-red-500">Happy</span>
      <span class="text-green-500">New</span>
      <span class="text-teal-500">Year</span>
      <span class="text-yellow-500">2023</span>
      <span class="text-blue-500">!!!</span>
    </div>
  </div>
</template>
