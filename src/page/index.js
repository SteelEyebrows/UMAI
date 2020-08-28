import withSplitting from '../lib/hoc/withSplitting';

export const Home = withSplitting(()=>import('./_Home'));
export const Brand = withSplitting(()=>import('./_Brand'));

