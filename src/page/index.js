import withSplitting from '../lib/hoc/withSplitting';

export const Home = withSplitting(()=>import('./_Home'));
export const Brand = withSplitting(()=>import('./_Brand'));
export const Menu = withSplitting(()=>import('./_Menu'));

