import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, ShieldCheck, AlertTriangle } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041C34]/85 backdrop-blur-xs">
      <div className="bg-[#041C34] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border-2 border-[#E4BC44] max-h-[85vh] overflow-y-auto text-[#F4F4F4]">
        <div className="flex items-start justify-between gap-4 border-b border-[#0C1C3C] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0C1C3C] border border-[#E4BC44]/40 text-[#E4BC44] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E4BC44]">
                {isRtl ? "سياسة الخصوصية وحماية المعطيات" : "Politique de Confidentialité"}
              </h3>
              <span className="text-xs text-[#F4F4EC]/70 font-semibold">
                {isRtl ? "وثيقة توجيهية خاصة بمركز آفاق للاستشارات (Les Horizons Consulting)" : "Document de référence pour les inscriptions"}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#F4F4F4]/70 hover:text-[#E4BC44] hover:bg-[#0C1C3C] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Warning banner */}
        <div className="p-3 bg-[#0C1C3C] border border-[#E4BC44]/40 rounded-xl flex items-start gap-2.5 text-xs text-[#F4F4F4]">
          <AlertTriangle className="w-4 h-4 text-[#E4BC44] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {isRtl
              ? "تنبيه إداري: هذا النص يشكل نموذجاً أولياً للممارسات البيداغوجية، ويجب مراجعته من قبل المستشار القانوني للمركز لضمان مطابقته للقوانين الوطنية ذات الصلة (مثل القانون 09-08 بالمغرب)."
              : "Avertissement : Ce texte constitue une trame de référence pour les inscriptions. Il doit être formellement validé par le conseil juridique de l'établissement avant toute mise en exploitation commerciale."}
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#F4F4F4]/90 leading-relaxed">
          <section className="space-y-1.5">
            <h4 className="font-bold text-[#E4BC44]">
              {isRtl ? "1. جمع البيانات الشخصية" : "1. Données collectées"}
            </h4>
            <p>
              {isRtl
                ? "يجمع النموذج المخصص للاستعلام والتسجيل حصراً: الاسم واللقب، رقم الهاتف، عنوان البريد الإلكتروني الاختياري، والبرنامج المستهدف."
                : "Les seules données collectées via le formulaire de contact sont le nom, le numéro de téléphone, l'adresse e-mail (optionnelle) et l'intitulé du programme sollicité."}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-[#E4BC44]">
              {isRtl ? "2. غاية الاستخدام والسرية" : "2. Finalité et non-diffusion"}
            </h4>
            <p>
              {isRtl
                ? "تُستخدم هذه المعلومات حصراً من طرف إدارة المركز للرد على طلبات التسجيل وتقديم التوضيحات البيداغوجية. لا يتم بيع أو مشاركة أي معلومة مع جهات خارجية أو معلنين."
                : "Ces informations sont strictement exploitées par l'équipe administrative pour répondre aux demandes de renseignements et d'inscription. Aucune donnée n'est cédée, vendue ou transmise à un tiers sans consentement exprès."}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-[#E4BC44]">
              {isRtl ? "3. حقوق المستفيدين" : "3. Droits d'accès et de rectification"}
            </h4>
            <p>
              {isRtl
                ? "يحق لكل مترشح أو ولي أمر طلب مراجعة أو تصحيح أو حذف معطياته في أي وقت عبر التواصل المباشر مع كتابة المركز."
                : "Conformément à la réglementation sur la protection des données à caractère personnel, chaque candidat ou parent peut solliciter la modification ou la suppression de ses données auprès de la direction."}
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-[#0C1C3C] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs sm:text-sm font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl transition-colors cursor-pointer"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
