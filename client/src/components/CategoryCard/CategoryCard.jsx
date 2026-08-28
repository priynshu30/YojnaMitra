import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Sprout,
  Briefcase,
  Heart,
  Home,
  Activity,
  Building2,
  ShieldCheck,
  Award,
  Coins,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = {
  GraduationCap,
  Sprout,
  Briefcase,
  Heart,
  Home,
  Activity,
  Building2,
  ShieldCheck,
  Award,
  Coins,
};

const CategoryCard = ({ category }) => {
  const { lang } = useLanguage();
  const Icon = iconMap[category.icon] || GraduationCap;

  return (
    <Link
      to={`/schemes?category=${encodeURIComponent(category.id)}`}
      className="group bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-green/50 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-12 h-12 rounded-xl bg-brand-greenLight text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-200 shadow-2xs">
          <Icon className="w-6 h-6" />
        </div>
        <div className="w-7 h-7 rounded-full bg-brand-warmBg text-brand-textMuted group-hover:text-brand-green flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-green transition-colors">
          {lang === 'hi' ? category.name : category.nameEn || category.id}
        </h3>
        <p className="text-xs text-brand-textMuted mt-1 line-clamp-2 leading-relaxed">
          {category.desc}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold">
        <span className="text-brand-green">
          {category.count}+ {lang === 'hi' ? 'योजनाएँ' : 'Schemes'}
        </span>
        <span className="text-brand-textMuted group-hover:translate-x-0.5 transition-transform">
          {lang === 'hi' ? 'देखें →' : 'Explore →'}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
