import { types } from 'replugged';
export default [
  {
    find: 'guildsnav',
    replacements: [
      {
        match: /\(0,\w+\.\w+\)\(\w+\.\w+,{isOnHubVerificationRoute/,
        replace: (suffix: string) => `replugged.plugins.getExports("xyz.griefmodz.StatisticCounter")?._getCounter?.(),${suffix}`
      }
    ]
  }
] as types.PlaintextPatch[];
