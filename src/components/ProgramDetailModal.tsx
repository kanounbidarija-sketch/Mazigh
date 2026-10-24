import React from 'react';
import { ProgramItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { CATEGORIES_CONFIG } from '../data/defaultData';
import {
  X,
  BookOpen,
  Target,
  Clock,
  Layers,
  Calendar,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  currentLang: Language;
  onClose: () => void;
  onRegister: (program: ProgramItem) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  currentLang,
  onClose,
  onRegister,
}) => {
  if (!program) return null;

  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const title = isRtl ? program.titleAr : program.titleFr;
  const subtitle = isRtl ? program.subtitleAr : program.subtitleFr;
  const audience = isRtl ? program.targetAudienceAr : program.targetAudienceFr;
  const subjects = isRtl ? program.subjectsAr : program.subjectsFr;
  const methodology = isRtl ? program.methodologyAr : program.methodologyFr;
  const duration = isRtl ? program.durationAr : program.durationFr;
  const format = isRtl ? program.formatAr : program.formatFr;
  const registrationStatus = isRtl ? program.registrationStatusAr : program.registrationStatusFr;
  const disclaimer = isRtl ? program.disclaimerAr : program.disclaimerFr;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041C34]/85 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#041C34] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border-2 border-[#E4BC44] my-8 max-h-[90vh] overflow-y-auto text-[#F4F4F4]">
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[#0C1C3C] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#E4BC44] font-bold uppercase tracking-wider">
              {program.code && (
                <span className="font-mono bg-[#0C1C3C] text-[#E4BC44] px-2 py-0.5 rounded border border-[#E4BC44]/40">
                  {program.code}
                </span>
              )}
              <span>
                {isRtl
                  ? (CATEGORIES_CONFIG.find((c) => c.id === program.category)?.labelAr || program.category)
                  : (CATEGORIES_CONFIG.find((c) => c.id === program.category)?.labelFr || program.category)}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#E4BC44] leading-snug">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F4F4]/80">{subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#F4F4F4]/70 hover:text-[#E4BC44] hover:bg-[#0C1C3C] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-xs sm:text-sm text-[#F4F4F4]">
          {/* Public cible */}
          <div className="p-3.5 bg-[#0C1C3C] border border-[#0C1C3C] rounded-xl space-y-1">
            <span className="font-bold text-[#E4BC44] flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#E4BC44]" />
              <span>{t.targetAudienceLabel}</span>
            </span>
            <p className="text-[#F4F4F4]/90">{audience}</p>
          </div>

          {/* Matières & Modules détaillés */}
          <div className="space-y-2">
            <span className="font-bold text-[#E4BC44] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#E4BC44]" />
              <span>{t.subjectsLabel}</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2 bg-[#0C1C3C] border border-[#0C1C3C] rounded-lg text-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E4BC44] mt-0.5 shrink-0" />
                  <span className="text-[#F4F4F4]">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Approche pédagogique */}
          <div className="space-y-1">
            <span className="font-bold text-[#E4BC44] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#E4BC44]" />
              <span>{t.methodologyLabel}</span>
            </span>
            <p className="text-[#F4F4F4]/90 leading-relaxed">{methodology}</p>
          </div>

          {/* Format & Durée */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#0C1C3C]">
            <div className="p-3 bg-[#0C1C3C] rounded-xl space-y-0.5">
              <span className="font-bold text-[#E4BC44] flex items-center gap-1.5 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#E4BC44]" />
                <span>{t.durationLabel}</span>
              </span>
              <p className="text-xs text-[#F4F4F4]">{duration}</p>
            </div>

            <div className="p-3 bg-[#0C1C3C] rounded-xl space-y-0.5">
              <span className="font-bold text-[#E4BC44] flex items-center gap-1.5 text-xs">
                <Calendar className="w-3.5 h-3.5 text-[#E4BC44]" />
                <span>{t.formatLabel}</span>
              </span>
              <p className="text-xs text-[#F4F4F4]">{format}</p>
            </div>
          </div>

          {/* Statut d'inscription */}
          <div className="p-3 bg-[#0C1C3C] border border-[#E4BC44]/40 rounded-xl space-y-1 text-xs">
            <span className="font-bold text-[#E4BC44] block">
              {t.registrationNotice}
            </span>
            <p className="text-[#F4F4F4]">{registrationStatus}</p>
          </div>

          {/* Disclaimer légal */}
          {disclaimer && (
            <div className="p-3 bg-[#0C1C3C]/60 border border-[#0C1C3C] rounded-xl flex items-start gap-2.5 text-xs text-[#F4F4F4]/70">
              <AlertCircle className="w-4 h-4 text-[#E4BC44] shrink-0 mt-0.5" />
              <p>{disclaimer}</p>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[#0C1C3C] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-[#F4F4F4]/80 hover:text-[#E4BC44] transition-colors cursor-pointer"
          >
            {t.closeModal}
          </button>

          <button
            onClick={() => {
              onRegister(program);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.registerToThisProgram}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
