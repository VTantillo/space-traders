import { queryOptions } from '@tanstack/react-query'
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
  allContracts: () => [...meQueries.all(), 'contract'],
  contracts: (data: GetContractsData) =>
    queryOptions({
      queryKey: [...meQueries.allContracts(), data],
      queryFn: () => getContracts(data),
    }),
  contract: (data: GetContractData) =>
    queryOptions({
      queryKey: [...meQueries.allContracts(), data],
      queryFn: () => getContract(data),
    }),
  allShips: () => [...meQueries.all(), 'ship'],
  ships: (data: GetMyShipsData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), data],
      queryFn: () => getMyShips(data),
    }),
  ship: (data: GetMyShipData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), data],
      queryFn: () => getMyShip(data),
    }),
  allShipCargo: () => [...meQueries.allShips(), 'cargo'],
  shipCargo: (data: GetMyShipCargoData) =>
    queryOptions({
      queryKey: [...meQueries.allShipCargo(), data],
      queryFn: () => getMyShipCargo(data),
    }),
  cooldown: (data: GetShipCooldownData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), 'cooldown', data],
      queryFn: () => getShipCooldown(data),
    }),
  shipNav: (data: GetShipNavData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), 'nav', data],
      queryFn: () => getShipNav(data),
    }),
  mounts: (data: GetMountsData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), 'mounts', data],
      queryFn: () => getMounts(data),
    }),
  scrapShip: (data: GetScrapShipData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), 'scrap', data],
      queryFn: () => getScrapShip(data),
    }),
  repairShip: (data: GetRepairShipData) =>
    queryOptions({
      queryKey: [...meQueries.allShips(), 'repair', data],
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
