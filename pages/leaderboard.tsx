import { useState } from 'react'
import PageBodyContainer from '../components/PageBodyContainer'
import TopBar from '../components/TopBar'
import LeaderboardTable from '../components/LeaderboardTable'
import ButtonGroup from 'components/ButtonGroup'

const leaderboardRangePresets = [
  { label: '7d', value: '7' },
  { label: '30d', value: '30' },
  { label: 'All', value: '9999' },
]
const leaderboardRangePresetLabels = leaderboardRangePresets.map((x) => x.label)
const leaderboardRangePresetValues = leaderboardRangePresets.map((x) => x.value)

export default function Leaderboard() {
  const [leaderboardRange, setLeaderboardRange] = useState('30')

  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <TopBar />
      <PageBodyContainer>
        <div className="flex flex-col pt-8 pb-3 sm:flex-row sm:items-center sm:justify-between sm:pb-6 md:pt-10">
          <h1 className={`mb-4 text-2xl font-semibold text-th-fgd-1 sm:mb-0`}>
            Leaderboard
          </h1>
          <div className="w-full sm:ml-auto sm:w-56">
            <ButtonGroup
              activeValue={leaderboardRange}
              className="h-8"
              onChange={(r) => setLeaderboardRange(r)}
              values={leaderboardRangePresetValues}
              names={leaderboardRangePresetLabels}
            />
          </div>
        </div>
        <div className="rounded-lg bg-th-bkg-2 p-6">
          <LeaderboardTable range={leaderboardRange} />
        </div>
      </PageBodyContainer>
    </div>
  )
}
