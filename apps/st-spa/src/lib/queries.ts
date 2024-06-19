import { queryOptions, skipToken } from '@tanstack/react-query'
import {
  getAgent,
  GetAgentData,
  getAgents,
  GetAgentsData,
  getConstruction,
  GetConstructionData,
  getContract,
  GetContractData,
  getContracts,
  GetContractsData,
  getJumpGate,
  GetJumpGateData,
  getMarket,
  GetMarketData,
  getMounts,
  GetMountsData,
  getMyAgent,
  getMyShip,
  getMyShipCargo,
  GetMyShipCargoData,
  GetMyShipData,
  getMyShips,
  GetMyShipsData,
  getRepairShip,
  GetRepairShipData,
  getScrapShip,
  GetScrapShipData,
  getShipCooldown,
  GetShipCooldownData,
  getShipNav,
  GetShipNavData,
  getShipyard,
  GetShipyardData,
  getStatus,
  getSystem,
  GetSystemData,
  getSystems,
  GetSystemsData,
  getSystemWaypoints,
  GetSystemWaypointsData,
  getWaypoint,
  GetWaypointData,
} from 'st-ts-client'

export const stQueries = {
  all: () => ['space-traders'],
  status: () =>
    queryOptions({
      queryKey: [...stQueries.all(), 'status'],
      queryFn: () => getStatus(),
    }),
}

export const meQueries = {
  all: () => ['me'],
  agent: () =>
    queryOptions({
      queryKey: [...meQueries.all(), 'agent'],
      queryFn: () => getMyAgent(),
    }),
  // TODO: Eventually put getting the other registered ageints here
}

export const contractQueries = {
  all: () => ['contracts'],
  lists: () => [...contractQueries.all(), 'list'],
  list: (data: GetContractsData) =>
    queryOptions({
      queryKey: [...contractQueries.lists(), data],
      queryFn: () => getContracts(data),
    }),
  details: () => [...contractQueries.all(), 'detail'],
  detail: (data: GetContractData) =>
    queryOptions({
      queryKey: [...contractQueries.details(), data],
      queryFn: () => getContract(data),
    }),
}

export const shipQueries = {
  all: () => ['ships'],
  lists: () => [...shipQueries.all(), 'list'],
  list: (data: GetMyShipsData) =>
    queryOptions({
      queryKey: [...shipQueries.lists(), data],
      queryFn: () => getMyShips(data),
    }),
  details: () => [...shipQueries.all(), 'detail'],
  detail: (data: GetMyShipData | undefined) =>
    queryOptions({
      queryKey: [...shipQueries.details(), data],
      queryFn: data ? () => getMyShip(data) : skipToken,
    }),
  cooldown: (data: GetShipCooldownData) =>
    queryOptions({
      queryKey: [...shipQueries.details(), 'cooldown', data],
      queryFn: () => getShipCooldown(data),
    }),
  mounts: (data: GetMountsData) =>
    queryOptions({
      queryKey: [...shipQueries.details(), 'mounts', data],
      queryFn: () => getMounts(data),
    }),
  cargo: (data: GetMyShipCargoData) =>
    queryOptions({
      queryKey: [...shipQueries.details(), 'cargo', data],
      queryFn: () => getMyShipCargo(data),
    }),
  nav: (data: GetShipNavData) =>
    queryOptions({
      queryKey: [...shipQueries.details(), 'nav', data],
      queryFn: () => getShipNav(data),
    }),
  scrapValue: (data: GetScrapShipData) =>
    queryOptions({
      queryKey: [...shipQueries.details(), 'scrap', data],
      queryFn: () => getScrapShip(data),
    }),
  repairCost: (data: GetRepairShipData) =>
    queryOptions({
      queryKey: [...shipQueries.details(), 'repair', data],
      queryFn: () => getRepairShip(data),
    }),
}

export const agentQueries = {
  all: () => ['agent'],
  lists: () => [...agentQueries.all(), 'list'],
  list: (data: GetAgentsData) =>
    queryOptions({
      queryKey: [...agentQueries.lists(), data],
      queryFn: () => getAgents(data),
    }),
  details: () => [...agentQueries.all(), 'detail'],
  detail: (data: GetAgentData) =>
    queryOptions({
      queryKey: [...agentQueries.details(), data],
      queryFn: () => getAgent(data),
    }),
}

export const systemQueries = {
  all: () => ['system'],
  lists: () => [...systemQueries.all(), 'list'],
  list: (data: GetSystemsData) =>
    queryOptions({
      queryKey: [...systemQueries.lists(), data],
      queryFn: () => getSystems(data),
    }),
  details: () => [...systemQueries.all(), 'detail'],
  detail: (data: GetSystemData) =>
    queryOptions({
      queryKey: [...systemQueries.details(), data],
      queryFn: () => getSystem(data),
    }),
}

export const waypointQueries = {
  all: () => ['waypoint'],
  lists: () => [...waypointQueries.all(), 'list'],
  list: (data: GetSystemWaypointsData) =>
    queryOptions({
      queryKey: [...waypointQueries.lists(), data],
      queryFn: () => getSystemWaypoints(data),
    }),
  details: () => [...waypointQueries.all(), 'detail'],
  detail: (data: GetWaypointData) =>
    queryOptions({
      queryKey: [...waypointQueries.details(), data],
      queryFn: () => getWaypoint(data),
    }),
  market: (data: GetMarketData) =>
    queryOptions({
      queryKey: [...waypointQueries.details(), 'market', data],
      queryFn: () => getMarket(data),
    }),
  shipyard: (data: GetShipyardData) =>
    queryOptions({
      queryKey: [...waypointQueries.details(), 'shipyard', data],
      queryFn: () => getShipyard(data),
    }),
  jumpGate: (data: GetJumpGateData) =>
    queryOptions({
      queryKey: [...waypointQueries.details(), 'jump-gate', data],
      queryFn: () => getJumpGate(data),
    }),
  construction: (data: GetConstructionData) =>
    queryOptions({
      queryKey: [...waypointQueries.details(), 'contruction', data],
      queryFn: () => getConstruction(data),
    }),
}

export const factionQueries = {
  all: () => ['faction'],
  lists: () => [...factionQueries.all(), 'list'],
  list: (data: GetSystemWaypointsData) =>
    queryOptions({
      queryKey: [...factionQueries.lists(), data],
      queryFn: () => getSystemWaypoints(data),
    }),
  details: () => [...factionQueries.all(), 'detail'],
  detail: (data: GetWaypointData) =>
    queryOptions({
      queryKey: [...factionQueries.details(), data],
      queryFn: () => getWaypoint(data),
    }),
}
