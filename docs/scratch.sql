
with
system_waypoints as (
  select
    symbol as system_symbol,
    type,
    sector,
    x as system_x,
    y as system_y,
    jsonb_array_elements(waypoints) as waypoint
  from "system"
)
select
  sw.system_symbol,
  sw.type,
  sw.sector,
  sw.system_x,
  sw.system_y,
  sw.waypoint->'symbol' as waypoint_symbol,
  sw.waypoint->'type' as waypoint_type,
  sw.waypoint->'x' as waypoint_x,
  sw.waypoint->'y' as waypoint_y,
  sw.waypoint->'orbitals' as waypoint_orbitals,
  jsonb_array_length(sw.waypoint -> 'orbitals') as num_orbitals
from system_waypoints sw
order by num_orbitals desc;


select * from "system" limit 100;

with
current_system_coords as (
  select
    symbol,
    x,
    y
  from "system"
  where symbol = 'X1-SD16'
)
select
  s.symbol,
  s.type,
  s.x,
  s.y,
  |/( ( (s.x - cs.x) ^ 2 ) + ((s.y - cs.y) ^2) ) as distance,
  jsonb_array_length(s.waypoints) as num_waypoints,
  cs.x as source_system_x,
  cs.y as source_system_y
from "system" s, current_system_coords cs
order by distance;


select sum(jsonb_array_length(waypoints)) from "system";
